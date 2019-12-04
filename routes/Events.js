const express = require('express')
const events = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const db = require("../models")
events.use(cors())
require('cookie-parser')

process.env.SECRET_KEY = 'secret'

events.post('/register', (req, res) => {

  const eventData = {
    title: req.body.title,
    link: req.body.link,
    description: req.body.description,
    organization: req.body.organization,
    street: req.body.street,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    smalldescription: req.body.smalldescription,
    image: req.body.image,
    needed: req.body.needed,
    date: req.body.date,
    time: req.body.time,
    ampm: req.body.ampm
  }


  const userToken = req.cookies.userToken;
  var decoded = jwt.verify(userToken, process.env.SECRET_KEY)
  db.Event.create({ ...eventData, "UserId": decoded.id })
    .then(event => {
      console.log("reached in then: " + event);
      console.log(eventData)
    })

});

module.exports = events