import React from "react";
import API from "../../utils/API";
import InterestedEvent from "../../components/InterestedEvents";
import { getVolunteerData } from "../../components/UserFunctions";
import jwt_decode from "jwt-decode";
import VolunteerProfile from "../Volunteer/VolunteerProfile.js";
import VolunteerSearch from "./VolunteerSearch.js";

var _ = require("lodash");

// *************************************************************************************************************************************
// Still need:
// 1. Sent volunteer informations (thier name, and thier current location) to this page some how!

class VolunteerDashboard extends React.Component {
  constructor() {
    super();
    if (localStorage.usertoken) {
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token);
      this.state = {
        events: [],
        location: "",
        volunteerID: "",
        userId: "",
        token: token,
        decoded: decoded
        // search: false,
        // loading: true,
        // currentPage: 1,
        // displayperPage: 20
      };
    } else {
      this.state = {
        events: [],
        location: "",
        volunteerID: "",
        userId: "",
        token: false,
        decoded: false
        // search: false,
        // loading: true,
        // currentPage: 1,
        // displayperPage: 20
      };
    }
  }

  // handleClick = event => {
  //     this.setState({
  //         currentPage: Number(event.target.id)
  //     });
  // }

  componentDidMount() {
    if (localStorage.usertoken) {
      // const token = localStorage.usertoken;
      // const decoded = jwt_decode(token);
      // console.log("DECODED", this.state.decoded);
      this.setState({
        userId: this.state.decoded.id
      });
      this.loadVolunteerData();
      setTimeout(
        () => {
        this.loadEvents();
      }
      , 1000);
    } else {
      return
    }
  }

  loadVolunteerData = () => {
    getVolunteerData().then(res => {
      console.log(res);

      if (this.state.decoded.kind === "volunteer") {
        this.setState({
          location: res.data.city
        })
      }


    });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadEvents = () => {
    API.getsavedEvent(this.state.userId).then(res => {
      console.log(res.data);
      this.setState({ events: res.data });
    });
  };

  search = () => {
    window.location.href = "/volunteer/search";
  };

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
        <div className="mb-5" id="vol-header">
          <h3 className="ml-5 pt-5 sub-title">Dashboard</h3>
        </div>

        <div className="mx-5">
          <div className="row ">
            <div className="col">
              <div className="row d-flex flex-justify-center">
                <h3 className="text-center sub-title ml-5">Local Events</h3>
              </div>

              <div className="row"></div>
            </div>
            <div className="col">
              <div className="row">
                <h3 className="col text-left sub-title ml-3">My Events</h3>
                <div className="col text-right mr-3">
                  <div
                    class="btn btn-sub"
                    data-toggle="modal"
                    data-target="#volProfileModalCenter"
                  >
                    Profile
                  </div>
                </div>
              </div>
              <div className="row">
                {/* <p>{this.state.location}</p>
                <p name="id">{this.state.userId}</p> */}
                <div>
                  {this.state.decoded.kind === "seeker" ||
                  !localStorage.usertoken ? (
                    <h3>Not for you.</h3>
                  ) : this.state.events.length === 0 ? (
                    <div>
                      <p>You are currently not Signed Up for any events</p>

                      <div className="col text-right mr-3">
                        {/* <div
                          className="btn btn-sub"
                          onClick={this.search}
                          data-toggle="modal"
                          data-target="#searchModalCenter"
                        >
                          Click Here to Start Searching
                        </div> */}
                        <div
                          className="btn btn-sub"
                          data-toggle="modal"
                          data-target="#searchModalCenter"
                        >
                          Click Here to Start Searching
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {/* <div
                        className="btn btn-sub"
                        onClick={this.search}
                        data-toggle="modal"
                        data-target="#searchModalCenter"
                      >
                        Search for Activity
                      </div> */}
                      <div
                        className="btn btn-sub"
                        data-toggle="modal"
                        data-target="#searchModalCenter"
                      >
                        Search for Activity
                      </div>
                      {renderEvents}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="volProfileModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="volProfileModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="volProfileModalLongTitle">
                  Volunteer Profile
                </h5>

                <button
                  type="button"
                  className="close text-white"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <VolunteerProfile />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="searchModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="searchModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="searchModalLongTitle">
                  Volunteer Profile
                </h5>

                <button
                  type="button"
                  className="close text-white"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <VolunteerSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default VolunteerDashboard;
