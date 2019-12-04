const express = require('express')
var sequelize = require("sequelize")
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const db = require("../models")
// const multer = require("multer");
// const upload = multer({ dest: "../client/public/images" })
// const fs = require('fs');

users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
  console.log("Users hit")
  const today = new Date()
  const userData = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    kind: req.body.kind,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  const volunteerData = {
    city: req.body.city
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
            db.User.create(userData)

          })
        } else {
          res.json({ error: 'User already exists' })
        }
      })

  const newVolunteer = db.Volunteer.create(volunteerData)

  Promise
    .all([newUser, newVolunteer])
    .then(responses => {
      console.log("Rows Inserted")
    })
    .catch(err => {
      console.log(err);
    });
});

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
            expiresIn: 900000000
          })
          jwt.decode(token, {})
          res.cookie('userToken', token, { maxAge: 900000000, httpOnly: true });
          console.log()
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


users.get('/all', (req, res) => {
  const userToken = req.cookies.userToken;
  var decoded = jwt.verify(userToken, process.env.SECRET_KEY)
  console.log(decoded)

  db.Seeker.findOne({
    where: {
      UserId: decoded.id
    }
  }).then(seeker =>

    db.sequelize.query(
      `SELECT *
    FROM Users u
    INNER JOIN Volunteers v 
    ON u.id = v.UserId
    WHERE v.state = ?`,
      { replacements: [seeker.state], type: sequelize.QueryTypes.SELECT }
    ))
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

// users.post("/api", upload.single("./client/public/images", 12), function (req, res) {
//   console.log(JSON.stringify(upload.storage.getDestination))
//   const originalName = req.file.originalname;
//   const newArr = originalName.split(".");
//   const fileExt = newArr[newArr.length - 1];
//   const origPath = req.file.path;
//   const newPath = origPath + "." + fileExt
//   console.log(newPath);
//   res.cookie('imageUpload', req.file.filename + "." + fileExt, { maxAge: 180000 });

//   fs.rename(origPath, newPath, (err) => {
//     if (err) throw err;
//     console.log('Rename complete!');
//   });

//   res.send(newPath)
// })

module.exports = users
