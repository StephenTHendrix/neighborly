import React from "react";
import API from "../../utils/API";
import EventCard from "../../components/EventCard";
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
        search: false,
        loading: true,
        currentPage: 1,
        displayperPage: 20
    };

    handleClick = event => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

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
        this.setState({ loading: true });
        this.setState({ currentPage: 1 });
        // API.searchevent(this.state.location)
        // let filterlocation = this.state.location;
        // setTimeout(() => {
        //     API.getevent().then(res => {
        //         let unsortedArray = res.data;
        //         // console.log(unsortedArray);
        //         let filterArray = _.filter(unsortedArray, event => event.city === filterlocation);
        //         // console.log(filterArray);
        //         this.setState({ events: filterArray });
        //     })
        //     this.setState({ loading: false })
        // }, 4000)


        let filterlocation = this.state.location;
        {
            this.state.search
                ?
                setTimeout(() => {
                    API.searchevent().then(res => {
                        let unsortedArray = res.data;
                        // console.log(unsortedArray);
                        let filterArray = _.filter(unsortedArray, event => event.city === filterlocation);
                        // console.log(filterArray);
                        this.setState({ events: filterArray });
                    })
                    this.setState({ loading: false })
                }, 1000)
                :
                API.getsavedEvent(this.state.userId).then(res => {
                    console.log(res.data);
                    this.setState({ events: res.data })
                    // this.setState({ loading: false })
                })
        }
    }

    changeState = () => {
        this.setState({ search: !search })
    }

    handleEventSignUp = (id) => {
        console.log(id)
        let saved = this.state.events.filter(item => item.id === id);
        saved[0].UserId = this.state.userId;
        // console.log(saved[0]);
        API.savedEvent(id, saved[0]).then(function () {
            console.log("Added");
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        const { events, currentPage, displayperPage } = this.state;
        const indexOfLastTodo = currentPage * displayperPage;
        const indexOfFirstTodo = indexOfLastTodo - displayperPage;
        let currentEvent = [];
        currentEvent = events.slice(indexOfFirstTodo, indexOfLastTodo);
        const renderEvents = currentEvent.map(event => {
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
                    handleEventSignUp={this.handleEventSignUp}
                />
            )
        });
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(events.length / displayperPage); i++) {
            pageNumbers.push(i);
        }
        // show Page number option
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });

        return (
            <div>
                <p>{this.state.location}</p>
                <p name="id">{this.state.userId}</p>
                <button onClick={this.changeState}>Search for Activity</button>
                {
                    (this.state.search)
                        ?
                        (<div>
                            <input type="text" name="location" id="mytext" onChange={this.handleInputChange} />
                            <input type="submit" id="mysubmit" onClick={this.loadEvents} />
                        </div>
                        )
                        : null
                }
                {
                    (this.state.loading)
                        ?
                        (<img src="https://media1.giphy.com/media/xT9DPldJHzZKtOnEn6/giphy.gif"></img>)
                        :
                        renderEvents
                }
                {
                    (this.state.loading)
                        ? (null)
                        : renderPageNumbers
                }
                <iframe name="hiddenFrame" width="0" height="0" border="0" style={{ display: "none" }}></iframe>
            </div>
        )
    }
}
export default VolunteerDashboard;