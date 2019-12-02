import React, { Component } from "react";
import { getUsers } from '../../components/UserFunctions.js'
// import API from "../../utils/API";
// import axios from "axios";
import UserCard from "../../components/UserCard";
import { getSeekerData, editSeekerData } from "../../components/UserFunctions";
// import User from "../models";
import jwt_decode from 'jwt-decode';
import ViewEvents from "../Seeker/ViewEvents.js";

class SeekerDashboard extends Component {
  state = {
    allUsers: [],
    token: {},
    decoded: {}
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
          <h3 className="ml-5 pt-5 sub-title">Dashboard</h3>
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
              <h3 className=" row text-center sub-title ml-4">Events</h3>
              <ViewEvents className="row col-sm-12" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SeekerDashboard;
