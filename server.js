var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var PORT = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

var VolunteerUsers = require('./routes/VolunteerUsers')

app.use('/volunteer/', VolunteerUsers)
// app.use('seeker/users', Users)


app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
