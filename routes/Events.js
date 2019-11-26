const express = require('express')
const events = express.Router()
const cors = require('cors')
// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcrypt')
const db = require("../models")
events.use(cors())

// process.env.SECRET_KEY = 'secret'

events.post('/register', (req, res) => {
//   console.log("Events hit", req)
  // const today = new Date()
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
  }

  const newEvent =
      // console.log("reached 1");
      db.Event.create(eventData)
          //TODO bcrypt
          .then(event => {
              console.log("reached in then: " + event);
              console.log(eventData)
          })

});

module.exports = events