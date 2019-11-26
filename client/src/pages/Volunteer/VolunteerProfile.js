import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import EventCard from "../../components/EventCard";
import { getEvents, getVolunteerData } from '../../components/UserFunctions'

class VolunteerProfile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            dob: '',
            bio: '',
            gender: '',
            city: '',
            state: '',
            zip: '',
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

    loadVolunteerData = () => {
        getVolunteerData().then(res => {
            console.log(res)
            this.setState({
                city: res.data.city,
                state: res.data.state,
                zip: res.data.zip,
                city: res.data.city,
                dob: res.data.dob,
                bio: res.data.bio
            })
        })
    }


    componentDidMount() {
        this.loadEvents();
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.loadVolunteerData();
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
                            <tr>
                                <td>City</td>
                                <td>{this.state.city}</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>{this.state.state}</td>
                            </tr>
                            <tr>
                                <td>Zip</td>
                                <td>{this.state.zip}</td>
                            </tr>
                            <tr>
                                <td>DOB</td>
                                <td>{this.state.dob}</td>
                            </tr>
                            <tr>
                                <td>Bio</td>
                                <td>{this.state.bio}</td>
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

export default VolunteerProfile
