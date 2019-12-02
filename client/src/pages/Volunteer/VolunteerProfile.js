import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'


import { getEvents, getVolunteerData, editVolunteerData } from '../../components/UserFunctions'
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
        })
            .catch(err => console.log(err));
    }

    loadVolunteerData = () => {
        getVolunteerData().then(res => {
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
        const indexOfClicked = [...e.target.parentElement.parentElement.parentElement.children].indexOf(e.target.parentElement.parentElement);
        this.setState({ toggleIndex: indexOfClicked })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            const editVolunteer = {
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
                dob: this.state.dob,
                bio: this.state.bio,
                gender: this.state.gender,
                image: this.state.image
            }
            editVolunteerData(editVolunteer).then(res => {
                this.loadEvents();
            })
        }
        )
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

                            <EditableRow
                                property="First Name"
                                value={this.state.first_name}
                                toggle="view">
                            </EditableRow>

                            <EditableRow
                                property="Last Name"
                                value={this.state.last_name}
                                toggle="view">
                            </EditableRow>

                            <EditableRow
                                property="Email"
                                value={this.state.email}
                                toggle="view">
                            </EditableRow>

                            <EditableRow
                                property="City"
                                name="city"
                                value={this.state.city}
                                onClick={this.editProperty}
                                onChange={this.onChange}
                                toggle={3 === this.state.toggleIndex ? "edit" : "view"}>
                            </EditableRow>

                            <EditableRow
                                property="State"
                                name="state"
                                value={this.state.state}
                                onClick={this.editProperty}
                                onChange={this.onChange}
                                toggle={4 === this.state.toggleIndex ? "edit" : "view"}>
                            </EditableRow>

                            <EditableRow
                                property="Zip"
                                name="zip"
                                value={this.state.zip}
                                onClick={this.editProperty}
                                onChange={this.onChange}
                                toggle={5 === this.state.toggleIndex ? "edit" : "view"}>
                            </EditableRow>

                            <EditableRow
                                property="DOB"
                                namee="dob"
                                value={this.state.dob}
                                onClick={this.editProperty}
                                onChange={this.onChange}
                                toggle={6 === this.state.toggleIndex ? "edit" : "view"}>
                            </EditableRow>

                            <EditableRow
                                property="Bio"
                                name="bio"
                                value={this.state.bio}
                                onClick={this.editProperty}
                                onChange={this.onChange}
                                toggle={7 === this.state.toggleIndex ? "edit" : "view"}>
                            </EditableRow>
                        </tbody>
                    </table>
                </div>
                {/* {this.state.events.length ?
                    (
                        <div>{this.state.events.map(event => (
                            <EventCard
                                key={event.id}
                                title={event.title}
                                description={event.description}>
                            </EventCard>
                        ))}
                        </div>) : (<h3>No events found.</h3>)
                } */}
            </div>
        )
    }
}





export default VolunteerProfile
