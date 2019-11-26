import axios from 'axios'
// require('express')
require('cookie-parser')



export const volunteerRegister = (newUser, newVolunteer) => {
  return axios
    .post('/volunteer/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      street: newVolunteer.street,
      city: newVolunteer.city,
      state: newVolunteer.state,
      zip: newVolunteer.zip,
      dob: newVolunteer.dob,
      bio: newVolunteer.bio,
      gender: newVolunteer.gender,
      image: newVolunteer.image
    })
    .then(response => {
      console.log('Registered')
    })
}

export const seekerRegister = (newUser, newSeeker) => {
  return axios
    .post('/seeker/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      companyName: newSeeker.companyName,
      type: newSeeker.type,
      address1: newSeeker.address1,
      address2: newSeeker.address2,
      city: newSeeker.city,
      state: newSeeker.state,
      zip: newSeeker.zip,
      bio: newSeeker.bio,
      website: newSeeker.website,
      image: newSeeker.image
    })
    .then(response => {
      console.log('Registered')
    })
}

export const eventRegister = newEvent => {
  return axios
    .post('/event/register', {
      title: newEvent.title,
      link: newEvent.link,
      description: newEvent.description,
      organization: newEvent.organization,
      street: newEvent.street,
      city: newEvent.city,
      state: newEvent.state,
      zip: newEvent.zip,
      smalldescription: newEvent.smalldescription,
      image: newEvent.image,
      needed: newEvent.needed,
      date: newEvent.date,
      time: newEvent.time,
  })
    .then(response => {
      console.log('Registered Event')
    })
}

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password,
      kind: user.kind
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      // console.log("RES DATA: " + response.data)

      // //Clearing the cookie
      // document.cookie = "userData=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

      // // Store the username as a cookie using "document.cookie"
      // document.cookie = "userData=" + response.data + ";";
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getUsers = () => {
  return axios
    .get('users/all')
  // .then(response => {
  //   console.log('UserFunctions: ', response)
  // })
}

export const getEvents = () => {
  return axios
    .get('users/events')
  // .then(response => {
  //   console.log('UserFunctions: ', response)
  // })
}

export const getVolunteerData = () => {
  return axios
    .get('/volunteer/data')
}
