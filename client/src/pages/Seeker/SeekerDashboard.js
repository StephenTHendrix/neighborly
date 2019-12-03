import React, { Component } from "react";
import { getUsers } from '../../components/UserFunctions.js'
// import API from "../../utils/API";
// import axios from "axios";
import UserCard from "../../components/UserCard";
import { getSeekerData, editSeekerData } from "../../components/UserFunctions";
// import User from "../models";
import jwt_decode from 'jwt-decode';
import ViewEvents from "../Seeker/ViewEvents.js";
import SeekerProfile from "../Seeker/SeekerProfile.js";
import CreateEvent from "./CreateEvent.js";

class SeekerDashboard extends Component {
  state = {
    allUsers: [],
    token: {},
    decoded: {},
    first_name: "",
    last_name: ""
  };

  

  loadUsers = () => {
    getUsers()
      .then(res => {
        console.log("SEEKERDASHBOARD: ", res);

        {
          typeof res.data === "string"
            ? this.setState({
                allUsers: []
              })
            : this.setState({
                allUsers: res.data
              });
        }

        console.log(this.state.allUsers);
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadUsers();
    this.setState({
      first_name: this.state.decoded.first_name,
      last_name: this.state.decoded.last_name
    })
  }

  render() {
    if (localStorage.usertoken) {
      this.state.token = localStorage.usertoken;
      this.state.decoded = jwt_decode(this.state.token);
    } else {
      this.state.token = false;
      this.state.decoded = false;
    }
    return (
      <div>
        <div className="mb-5" id="seek-header">
          <h3 className="ml-5 pt-5 sub-title">
            Hello, {this.state.first_name} {this.state.last_name}
          </h3>
        </div>
        <div className="mx-5">
          <div className="row ">
            <div className="col">
              <div className="row d-flex flex-justify-center">
                <h3 className="text-center sub-title ml-5">Volunteers</h3>
              </div>
              <div className="col">
                <div>
                  {this.state.decoded.kind === "volunteer" ||
                  !this.state.token ? (
                    <h3>Not for you.</h3>
                  ) : (
                    <div>
                      {this.state.allUsers.length ? (
                        <div className="d-flex flex-row flex-wrap">
                          {this.state.allUsers.map(user => (
                            <UserCard
                              key={user.id}
                              first_name={user.first_name}
                              last_name={user.last_name}
                              city={user.city}
                              state={user.state}
                              bio={user.bio}
                              email={user.email}
                            ></UserCard>
                          ))}
                        </div>
                      ) : (
                        <h3>No users found.</h3>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <h3 className="col text-left sub-title ml-3">Events</h3>
                <div className="col text-left">
                  <div
                    class="btn btn-sub"
                    data-toggle="modal"
                    data-target="#createEventModalCenter"
                  >
                    Create Event
                  </div>
                </div>
                <div className="col text-right mr-3">
                  <div
                    class="btn btn-sub"
                    data-toggle="modal"
                    data-target="#seekProfileModalCenter"
                  >
                    Profile
                  </div>
                </div>
              </div>

              <ViewEvents className="row col-sm-12" />
            </div>
          </div>
        </div>

        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="seekProfileModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="seekProfileModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="seekProfileModalLongTitle">
                  Seeker Profile
                </h5>

                <button
                  type="button"
                  class="close text-white"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <SeekerProfile />
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="createEventModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="createEventModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="createEventModalLongTitle">
                  Create Event
                </h5>

                <button
                  type="button"
                  class="close text-white"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <CreateEvent />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SeekerDashboard;
