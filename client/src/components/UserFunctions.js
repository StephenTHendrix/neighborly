import axios from 'axios'

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
      street: newSeeker.street,
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

export const login = user => {
  return axios
    .post('users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
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
