import axios from 'axios'

export const volunteerRegister = (newUser, newVolunteer) => {
  console.log(newUser, newVolunteer)
  return axios
    .post('/volunteer/register', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
      city: newVolunteer.city
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
