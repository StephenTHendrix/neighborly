import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import EventCard from "./EventCard";
import { getEvents } from './UserFunctions.js'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      errors: {},
      events: []
    }
  }

  loadEvents = () => {
    getEvents().then(res => {
      console.log('Profile: ', res)


      {
        typeof res.data === "string" ? (
          this.setState({

            events: [],
          })) : (
            this.setState({
              events: res.data,
            })
          )
      }

      console.log(this.state.events)
    })
      .catch(err => console.log(err));
  }


  componentDidMount() {
    this.loadEvents();
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    console.log('DECODED', decoded)
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    })
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
        </div>
        {this.state.events.length ?
          (
            <div>{this.state.events.map(event => (
              <EventCard key={event.id} title={event.title} description={event.description}>




              </EventCard>
            ))}
            </div>) : (<h3>No events found.</h3>)
        }</div>
    )
  }
}

export default Profile
