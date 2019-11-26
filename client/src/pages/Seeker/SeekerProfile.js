import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import EventCard from "../../components/EventCard";
import { getEvents, getSeekerData } from '../../components/UserFunctions'

class SeekerProfile extends Component {
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

    loadSeekerData = () => {
        getSeekerData().then(res => {
            console.log(res)
            this.setState({
                companyName: res.data.companyName,
                address1: res.data.address1,
                address2: res.data.address2,
                city: res.data.city,
                state: res.data.state,
                zip: res.data.zip,
                website: res.data.website,
                bio: res.data.bio
            })
        })
    }


    componentDidMount() {
        this.loadEvents();
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.loadSeekerData();
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
                            {this.state.companyName !== "" ?
                                <tr>
                                    <td>Company Name</td>
                                    <td>{this.state.companyName}</td>
                                </tr> :
                                <div></div>}

                            <tr>
                                <td>Address</td>
                                <td>{this.state.address1}</td>
                            </tr>
                            <tr>
                                <td>Address 2</td>
                                <td>{this.state.address2}</td>
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
                                <td>Website</td>
                                <td>{this.state.website}</td>
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

export default SeekerProfile
