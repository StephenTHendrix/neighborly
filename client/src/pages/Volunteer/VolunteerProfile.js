import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import EventCard from "../../components/EventCard";
import { getEvents, getVolunteerData } from '../../components/UserFunctions'
import EditableRow from "../../components/EditableRow"

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
            events: [],
            toggleIndex: undefined
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

    editProperty = (e) => {
        console.log(Object.getPrototypeOf(e.target.parentElement.parentElement))

        const indexOfClicked = [...e.target.parentElement.parentElement.parentElement.children].indexOf(e.target.parentElement.parentElement);

        console.log(indexOfClicked);
        this.setState({ toggleIndex: indexOfClicked })

    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
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

                            <EditableRow property="First Name" value={this.state.first_name} toggle="view"></EditableRow>
                            {/* <tr className="profile-item">
                                <td>First Name</td>
                                <td>{this.state.first_name}</td>
                            </tr> */}
                            <EditableRow property="Last Name" value={this.state.last_name} toggle="view"></EditableRow>
                            {/* <tr className="profile-item">
                                <td>Last Name</td>
                                <td>{this.state.last_name}</td>
                            </tr> */}
                            <EditableRow property="Email" value={this.state.email} toggle="view"></EditableRow>
                            {/* <tr className="profile-item">
                                <td>Email</td>
                                <td>{this.state.email}</td>
                            </tr> */}
                            <EditableRow
                                property="City"
                                name="city"
                                value={this.state.city}
                                onClick={this.editProperty}
                                onChange={this.onChange}
                                toggle={3 === this.state.toggleIndex ? "edit" : "view"}></EditableRow>
                            {/* <tr className="profile-item">
                                <td>City</td>
                                <td>{this.state.city}</td>
                            </tr> */}
                            <EditableRow property="State" value={this.state.state} onClick={this.editProperty} toggle={4 === this.state.toggleIndex ? "edit" : "view"}></EditableRow>
                            {/* <tr className="profile-item">
                                <td>State</td>
                                <td>{this.state.state}</td>
                            </tr> */}
                            <EditableRow property="Zip" value={this.state.zip} onClick={this.editProperty} toggle={5 === this.state.toggleIndex ? "edit" : "view"}></EditableRow>
                            {/* <tr className="profile-item">
                                <td>Zip</td>
                                <td>{this.state.zip}</td>
                            </tr> */}
                            <EditableRow property="DOB" value={this.state.dob} onClick={this.editProperty} toggle={6 === this.state.toggleIndex ? "edit" : "view"}></EditableRow>
                            {/* <tr className="profile-item">
                                <td>DOB</td>
                                <td>{this.state.dob}</td>
                            </tr> */}
                            <EditableRow property="Bio" value={this.state.bio} onClick={this.editProperty} toggle={7 === this.state.toggleIndex ? "edit" : "view"}></EditableRow>
                            {/* <tr className="profile-item">
                                <td>Bio</td>
                                <td>{this.state.bio}</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>
                {this.state.events.length ?
                    (
                        <div>{this.state.events.map(event => (
                            <EventCard
                                key={event.id}
                                title={event.title}
                                description={event.description}>
                            </EventCard>
                        ))}
                        </div>) : (<h3>No events found.</h3>)
                }</div>
        )
    }
}




export default VolunteerProfile
