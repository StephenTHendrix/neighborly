import React from "react";
import API from "../../utils/API";
import InterestedEvent from "../../components/InterestedEvents";
import { getVolunteerData } from "../../components/UserFunctions";
import jwt_decode from "jwt-decode";
import VolunteerProfile from "../Volunteer/VolunteerProfile.js";
import VolunteerSearch from "./VolunteerSearch.js";
var _ = require("lodash");


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
        decoded: decoded,
        first_name: "",
        last_name: ""
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
        userId: this.state.decoded.id,
        first_name: this.state.decoded.first_name,
        last_name: this.state.decoded.last_name
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

  onDelete = (id) => {
    // let saved = this.state.events.filter(item => item.id === id);
    // saved[0].UserId = this.state.userId;
    API.removeEvent(id, this.state.userId)
      .then(function () {
        console.log("Deleted");
      })
      .catch(function (error) {
        console.log(error);
      });
    API.removeNumber(id, 1)
      .then(function () {
        console.log("Minus One");
      })
      .catch(function (error) {
        console.log(error);
      });
    setTimeout(() => {
      window.location.reload();
    }, 500);
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
          ampm={event.ampm}
          street={event.street}
          city={event.city}
          state={event.state}
          needed={event.needed}
          registered={event.going}
          key={event.id}
          image={event.image}
          deleteEvent={this.onDelete}
        />
      )
    });

    return (
      <div>
        <div className="mb-6" id="vol-header">
          <h3 className="ml-5 pt-5 sub-title">
            Hello, {this.state.first_name} {this.state.last_name}
          </h3>
          <div
            class="btn btn-sub ml-5"
            data-toggle="modal"
            data-target="#volProfileModalCenter"
          >
            Profile
          </div>
        </div>

        <div className="mx-5 mt-5">
          <div className="row ">
            <div className="col-lg-6 col-md-12">
              <div className="row d-flex flex-justify-center">
                <h3 className="text-center sub-title ml-4">Local Events</h3>
              </div>

              <div className="col">
                <div>
                  {this.state.decoded.kind === "seeker" ||
                    !localStorage.usertoken ? (
                      <h3>Not for you.</h3>
                    ) :
                    (
                      <div className="col ml-2">
                        <VolunteerSearch />
                      </div>
                    )
                  }
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="row">
                <h3 className="col-xs-12 text-left sub-title ml-3">My Events</h3>

              </div>
              <div className="row">
                {/* <p>{this.state.location}</p>
                <p name="id">{this.state.userId}</p> */}
                <div className="col-xs-12">
                  {this.state.decoded.kind === "seeker" ||
                    !localStorage.usertoken ? (
                      <h3>Not for you.</h3>
                    ) : this.state.events.length === 0 ? (
                      <div>
                        <p>You are currently not Signed Up for any events</p>

                        <div className="col text-right"></div>
                      </div>
                    ) : (
                        <div className="col-xs-12 mt-5">{renderEvents}</div>
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
