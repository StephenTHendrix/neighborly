
import React, { Component } from "react";
import jwt_decode from "jwt-decode";
import API from "../../utils/API";
import SeekerEventCard from "../../components/SeekerEventCard";
import { getSeekerEvents, getSeekerData } from "../../components/UserFunctions";


class ViewEvents extends Component {
  constructor() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    super();
    this.state = {
      userID: "",
      first_name: "",
      last_name: "",
      // email: "",
      // dob: '',
      // bio: '',
      // gender: '',
      // city: '',
      // state: '',
      // zip: '',
      errors: {},
      events: [],
      token: token,
      decoded: decoded
    };
  }

  loadEvents = () => {
    getSeekerEvents()
      .then(res => {
        const Events = [];
        const each = res.data;
        each.forEach(element => {
          const singleFilter = element;
          let eventID = element.id;
          API.seekerEventVolunteerList(eventID, this.state.userID).then(res => {
            // console.log(res.data);

            if (res.data[0].first_name) {
              let registeredUser = {
                registeredUser: res.data
              };
              let registered = {
                registered: Object.keys(res.data).length
              };
              Object.assign(singleFilter, registeredUser);
              Object.assign(singleFilter, registered);
            }
            else {
              let registered = {
                registered: 0
              };
              Object.assign(singleFilter, registered);
            }
            Events.push(singleFilter);
          })
        })
        setTimeout(() => {
          this.setState({
            events: Events
          });
          console.log(this.state.events);
        }, 2000)
      })
      .catch(err => console.log(err));
  };

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
    console.log(this.state.decoded);
    this.loadEvents();
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    // this.loadSeekerData();
    this.setState({
      userID: decoded.id,
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email
    });
  }

  render() {
    return (
      <div>
        {this.state.decoded.kind === "volunteer" || !this.state.token ? (
          <h3>Not for you.</h3>
        ) : (
            <div>
              {this.state.events.length ? (
                <div>
                  {this.state.events.map(event => (
                    <SeekerEventCard
                      id={event.id}
                      key={event.id}
                      title={event.title}
                      description={event.description}
                      needed={event.needed}
                      registered={event.registered}
                      date={event.date}
                      time={event.time}
                      userVolunteer={event.registeredUser}
                    ></SeekerEventCard>
                  ))}
                </div>
              ) : (
                  <h3>No events found.</h3>
                )}
            </div >
          )
        }
      </div>
    )
  }
}

export default ViewEvents;
