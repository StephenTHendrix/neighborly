import React, { Component } from "react";
import { getUsers } from "../../components/UserFunctions.js";
// import API from "../../utils/API";
// import axios from "axios";
import UserCard from "../../components/UserCard";
import { getSeekerData, editSeekerData } from "../../components/UserFunctions";
// import User from "../models";
import jwt_decode from "jwt-decode";
import ViewEvents from "../Seeker/ViewEvents.js";
import SeekerProfile from "../Seeker/SeekerProfile.js";
import EventRegister from "../../components/EventRegister";
import { eventRegister } from "../../components/UserFunctions";

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


class SeekerDashboard extends Component {
  constructor() {
    super()
    this.state = {
      allUsers: [],
      token: {},
      decoded: {},

      title: "",
      link: "",
      description: "",
      organization: "",
      street: "",
      city: "",
      state: "",
      zip: "",
      smalldescription: "",
      image: "",
      files: [],
      needed: "",
      date: "",
      time: "",
      ampm: "",
      first_name: "",
      last_name: ""

    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

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
    document.cookie = "imageUpload= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    this.loadUsers();
    this.setState({
      first_name: this.state.decoded.first_name,
      last_name: this.state.decoded.last_name
    })
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === "date") {
      var numChars = e.target.value.length;
      if (this.state[e.target.name].length < e.target.value.length && (numChars === 2 || numChars === 5)) {
        var thisVal = e.target.value;
        thisVal += '/';
        e.target.value = thisVal;
        this.setState({ [e.target.name]: thisVal });
      }
    }
    if (e.target.name === "time") {
      var numChars = e.target.value.length;
      if (this.state[e.target.name].length < e.target.value.length && (numChars === 2)) {
        var thisVal = e.target.value;
        thisVal += ':';
        e.target.value = thisVal;
        this.setState({ [e.target.name]: thisVal });
      }
    }
  }

  handleInit() {
    console.log('FilePond instance has initialised', this.pond);
  }


  onSubmit(e) {
    e.preventDefault();

    this.setState({ image: document.cookie.split('=')[1] })
    const imgCookie = document.cookie.split('=')[1]

    setTimeout(() => {
      const newEvent = {
        title: this.state.title,
        link: this.state.link,
        description: this.state.description,
        organization: this.state.organization,
        street: this.state.street,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
        smalldescription: this.state.smalldescription,
        image: this.state.image,
        needed: this.state.needed,
        date: this.state.date,
        time: this.state.time,
        ampm: this.state.ampm
      };

      eventRegister(newEvent)
      window.location.reload()
    }, 1000)
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
          <div
            className="btn btn-sub ml-5"
            data-toggle="modal"
            data-target="#seekProfileModalCenter"
          >
            Profile
          </div>
        </div>
        <div className="mx-5">
          <div className="row ">
            <div className="col-lg-6 col-md-12">
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
                          <div className="ml-3 d-flex flex-row flex-wrap">
                            {this.state.allUsers.map(user => (
                              <UserCard
                                key={user.id}
                                first_name={user.first_name}
                                last_name={user.last_name}
                                city={user.city}
                                state={user.state}
                                bio={user.bio}
                                email={user.email}
                                gender={user.gender}
                                image={user.image}
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
                <EventRegister
                  title={this.state.title}
                  link={this.state.link}
                  description={this.state.description}
                  organization={this.state.organization}
                  street={this.state.street}
                  city={this.state.city}
                  state={this.state.state}
                  zip={this.state.zip}
                  smalldescription={this.state.smalldescription}
                  image={this.state.image}
                  needed={this.state.needed}
                  date={this.state.date}
                  time={this.state.time}
                  ampm={this.state.ampm}
                  onChange={this.onChange}
                  onSubmit={this.onSubmit}

                />

                <FilePond ref={ref => this.pond = ref}
                  files={this.state.files}
                  name="./client/public/images"
                  allowMultiple={false}
                  maxFiles={1}
                  server="/api"
                  oninit={() => this.handleInit()}
                  onload={(fileName) => {
                    console.log("This is the onload trigger!")
                    console.log(JSON.parse(fileName))
                  }}
                  onupdatefiles={(fileItems) => {
                    console.log("This is on update files")
                    // Set current file objects to this.state
                    this.setState({
                      files: fileItems.map(fileItem => {
                        return fileItem.file
                      }),
                    });
                  }}>
                </FilePond>
                <button
                  type="submit"
                  className="btn btn-lg btn-sub"
                  onClick={this.onSubmit}
                  data-dismiss="modal"
                >
                  Create Event!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SeekerDashboard;
