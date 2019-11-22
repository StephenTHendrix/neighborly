import React from "react";
import API from "../../utils/API";
import EventCard from "../../components/EventCard";
var _ = require("lodash");

// *************************************************************************************************************************************
// Still need: 
// 1. Sent volunteer informations to this page some how!
// 2. Create volunteer&event table to connect event and volunteer together


class VolunteerDashboard extends React.Component {
    state = {
        events: [],
        location: "Dallas",
        volunteerID: ""        
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        }, () => (console.log(this.state.location)));
    };

    componentDidMount() {
        this.loadEvents();
    };

    loadEvents = () => {
        API.getevent().then(res => {
            let filterlocation = this.state.location;
            console.log(filterlocation);
            let unsortedArray = res.data;
            console.log(unsortedArray);
            let filterArray = _.filter(unsortedArray, event => event.city === filterlocation)
            console.log(filterArray);
            console.log(this.state.location);
            this.setState({ location: "" });
            console.log(this.state.location);
            // this.setState({ events: res.data });
            this.setState({ events: filterArray });
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <form action="/api/event" method="post" target="hiddenFrame">
                    <input type="text" name="location" id="mytext" onChange={this.handleInputChange} />
                    <input type="submit" id="mysubmit" onClick={this.loadEvents} />
                </form>

                {this.state.events.map(event => {
                    return (
                        <EventCard
                            title={event.title}
                            id={event.id}
                            organization={event.organization}
                            smalldescription={event.smalldescription}
                            date={event.date}
                            time={event.time}
                            flexible={event.flexible}
                            key={event.id}
                        />
                    )
                })}
                <iframe name="hiddenFrame" width="0" height="0" border="0" style={{ display: "none" }}></iframe>
            </div>
        )
    }
}
export default VolunteerDashboard;