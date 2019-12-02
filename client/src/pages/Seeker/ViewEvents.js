import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import EventCard from "../../components/EventCard";
import { getSeekerEvents, getSeekerData } from '../../components/UserFunctions'

class ViewEvents extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            // dob: '',
            // bio: '',
            // gender: '',
            // city: '',
            // state: '',
            // zip: '',
            errors: {},
            events: []
        }
    }

    loadEvents = () => {
        getSeekerEvents().then(res => {
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

    // loadSeekerData = () => {
    //     getSeekerData().then(res => {
    //         console.log(res)
    //         this.setState({
    //             companyName: res.data.companyName,
    //             address1: res.data.address1,
    //             address2: res.data.address2,
    //             city: res.data.city,
    //             state: res.data.state,
    //             zip: res.data.zip,
    //             website: res.data.website,
    //             bio: res.data.bio
    //         })
    //     })
    // }


    componentDidMount() {
        this.loadEvents();
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        // this.loadSeekerData();
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        })
    }

    render() {
        return (
            <div>
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
                }
            </div>
        )
    }
}

export default ViewEvents
