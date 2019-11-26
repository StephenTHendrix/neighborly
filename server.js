var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 5000
require('dotenv').config();

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(cookieParser())

var VolunteerUsers = require('./routes/VolunteerUsers')
var SeekerUsers = require('./routes/SeekerUsers')
var Users = require('./routes/Users')
var Events = require('./routes/Events')

app.use('/volunteer/', VolunteerUsers)
app.use('/seeker/', SeekerUsers)
app.use('/users/', Users)
app.use('/event/', Events)


const db = require("./models");
require("./routes/event.js")(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

db.sequelize.sync().then(() => {
  // inside our db sync callback, we start the server.
  // this is our way of making sure the server is not listening
  // to requests if we have not yet made a db connection
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});


