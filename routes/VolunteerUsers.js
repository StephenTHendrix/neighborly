const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require("../models")
users.use(cors())
require('cookie-parser')

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
  console.log("Volunteer Users hit")
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    kind: 'volunteer',
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  const volunteerData = {
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    dob: req.body.dob,
    bio: req.body.bio,
    gender: req.body.gender,
    image: req.body.image
  }

  const newUser =
    // console.log("reached 1");
    db.User.findOne({
      where: {
        email: req.body.email
      }
    })
      //TODO bcrypt
      .then(user => {
        console.log("reached in then: " + user);
        console.log(userData)
        if (!user) {
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            userData.password = hash
            db.User.create(userData).then(newUser => db.Volunteer.create({ ...volunteerData, "UserId": newUser.id }))
          })
        } else {
          res.json({ error: 'User already exists' })
        }
      })

});

users.get("/data", function (req, res) {
  const userToken = req.cookies.userToken;
  var decoded = jwt.verify(userToken, process.env.SECRET_KEY)
  console.log(decoded)

  db.Volunteer.findOne({
    where: {
      UserId: decoded.id
    }
  })
    .then(volunteer => {
      console.log(volunteer);
      res.json(volunteer);
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.post('/login', (req, res) => {
  db.User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        }
      } else {
        res.status(400).json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})

users.get('/profile', (req, res) => {
  var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  db.User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/all', (req, res) => {
  // var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  db.User.findAll()
    .then(user => {
      console.log('USERSJS: ', user);
      if (user) {
        res.json(user)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

users.get('/events', (req, res) => {
  // var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  db.Event.findAll()
    .then(event => {
      console.log('eventSJS: ', event);
      if (event) {
        res.json(event)
      } else {
        res.send('event does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = users
