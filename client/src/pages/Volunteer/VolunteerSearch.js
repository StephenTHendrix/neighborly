import React from "react";
import API from "../../utils/API";
import SearchEventCard from "../../components/SearchEventCard";
import { getVolunteerData } from '../../components/UserFunctions';
import jwt_decode from 'jwt-decode';
var _ = require("lodash");

// *************************************************************************************************************************************
// Still need: 
// 1. Sent volunteer informations (thier name, and thier current location) to this page some how!

class VolunteerSearch extends React.Component {
  constructor() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    super();
    this.state = {
      // all Events after filter out the location;
      locationEvents: [],
      // events you already sign up for
      SignUpEvents: [],
      // final filterout all Events
      events: [],
      location: "",
      volunteerID: "",
      userId: "",
      token: token,
      decoded: decoded,
      // loading: true,
    };
  };

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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadVolunteerData = () => {
    getVolunteerData().then(res => {
      console.log(res)
      {
        this.state.decoded.kind === "volunteer"
          ? this.setState({
            location: res.data.city
          })
          : this.setState({
            location: ""
          });
      }
    })
  }

  loadEvents = () => {
    let filterlocation = this.state.location;
    // setTimeout(() => {
    API.searchevent().then(res => {
      let unsortedArray = res.data;
      // console.log(unsortedArray);
      let filterArray = _.filter(unsortedArray, event => event.city === filterlocation);
      // console.log(filterlocation);
      // console.log(filterArray);
      // this.setState({ events: filterArray });
      this.setState({ locationEvents: filterArray });
    });
    API.getsavedEvent(this.state.userId).then(res => {
      // console.log(res.data);
      this.setState({ SignUpEvents: res.data });
    });
    // this.setState({ loading: false })
    setTimeout(() => {
      // console.log(this.state.locationEvents);
      // console.log(this.state.SignUpEvents);
      let finalFilter = _.differenceBy(this.state.locationEvents, this.state.SignUpEvents, "title");
      console.log(finalFilter);
      this.setState({ events: finalFilter });
    }, 2000);
    // }, 1000);
  };

  myEvents = () => {
    window.location.href = "/volunteer";
  }

  handleEventSignUp = (id) => {
    console.log(id);
    let saved = this.state.events.filter(item => item.id === id);
    saved[0].UserId = this.state.userId;
    // console.log(saved[0]);
    API.savedEvent(id, saved[0])
      .then(function () {
        console.log("Added");
      })
      .catch(function (error) {
        console.log(error);
      });
    // update the "going" of events
    API.updateNumber(id, 1)
      .then(function () {
        console.log("Updated");
      })
      .catch(function (error) {
        console.log(error);
      });
    setTimeout(() => {
      window.location.reload();
    }, 500);

  }

  render() {
    const { events } = this.state;
    const renderEvents = events.map(event => {
      return (
        <SearchEventCard
          title={event.title}
          id={event.id}
          organization={event.organization}
          description={event.description}
          smalldescription={event.description.substring(0, 100)}
          date={event.date}
          time={event.time}
          ampm={event.ampm}
          street={event.street}
          city={event.city}
          state={event.state}
          needed={event.needed}
          signup={event.going}
          key={event.id}
          handleEventSignUp={this.handleEventSignUp}
          image={event.image}
        />
      )
    });

    return (
      <div>
        {this.state.decoded.kind === "seeker" || !this.state.token ? (
          <h3>Not for you.</h3>
        ) : (
            <div>
              <div>
                <input
                  type="text"
                  name="location"
                  id="mytext"
                  onChange={this.handleInputChange}
                />
                <div
                  className="btn btn-sub"
                  id="mysubmit"
                  onClick={this.loadEvents}>Submit
                  </div>
                {renderEvents}
              </div>
            </div>
          )}
      </div>
    );
  }
}
export default VolunteerSearch;