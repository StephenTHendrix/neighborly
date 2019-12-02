import React from "react";
import API from "../../utils/API";
import InterestedEvent from "../../components/InterestedEvents";
import { getVolunteerData } from '../../components/UserFunctions';
import jwt_decode from 'jwt-decode';

var _ = require("lodash");

// *************************************************************************************************************************************
// Still need: 
// 1. Sent volunteer informations (thier name, and thier current location) to this page some how!

class VolunteerDashboard extends React.Component {
    state = {
        events: [],
        location: "",
        volunteerID: "",
        userId: "",
        // search: false,
        // loading: true,
        // currentPage: 1,
        // displayperPage: 20
    };

    // handleClick = event => {
    //     this.setState({
    //         currentPage: Number(event.target.id)
    //     });
    // }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        console.log('DECODED', decoded)
        this.setState({
            userId: decoded.id
        })
        this.loadVolunteerData();
        setTimeout(() => {
            this.loadEvents();
        }, 1000)
    };

    loadVolunteerData = () => {
        getVolunteerData().then(res => {
            console.log(res)
            this.setState({
                location: res.data.city,
            })
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    loadEvents = () => {
        API.getsavedEvent(this.state.userId).then(res => {
            console.log(res.data);
            this.setState({ events: res.data })
        })
    }

    search = () => {
        window.location.href = "/volunteer/search";
    }

    render() {
        const { events } = this.state;
        const renderEvents = events.map(event => {
            return (
                <InterestedEvent
                    title={event.title}
                    id={event.id}
                    organization={event.organization}
                    description={event.description}
                    smalldescription={event.description.substring(0, 100)}
                    date={event.date}
                    time={event.time}
                    street={event.street}
                    city={event.city}
                    state={event.state}
                    needed={event.needed}
                    signup={event.going}
                    key={event.id}
                />
            )
        });

        return (
            <div>
                <div>
                    <p>{this.state.location}</p>
                    <p name="id">{this.state.userId}</p>
                    <button onClick={this.search}>Search for Activity</button>
                    {
                        (this.state.events.length == 0) ?
                            (
                                <div>
                                    <p>You are currently not Sign Up for any events</p>
                                    <button onClick={this.search}>Click Here to Start Searching</button>
                                </div>
                            )
                            :
                            renderEvents
                    }

                </div>
            </div>
        )
    }
}
export default VolunteerDashboard;