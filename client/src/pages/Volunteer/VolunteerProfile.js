import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'


import { getEvents, getVolunteerData, editVolunteerData } from '../../components/UserFunctions'
import EditableRow from "../../components/EditableRow"

let profileImage = "../assets/images/profile_male.png";
        


class VolunteerProfile extends Component {
    constructor() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            dob: '',
            bio: '',
            gender: '',
            city: '',
            state: '',
            zip: '',
            image: '',
            errors: {},
            events: [],
            toggleIndex: undefined,
            token: {},
            decoded: {},
        }
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    loadEvents = () => {
        getEvents().then(res => {
            {
                typeof res.data === "string" ? (
                    this.setState({
                        events: [],
                    })) : (
                        this.setState({
                            events: res.data,
                        })
                    )
            }
        })
            .catch(err => console.log(err));
    }

    loadVolunteerData = () => {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        getVolunteerData().then(res => {

            {
                decoded.kind === "seeker"


                    ? (this.state = {})
                    : this.setState({
                        city: res.data.city,
                        state: res.data.state,
                        zip: res.data.zip,
                        dob: res.data.dob,
                        bio: res.data.bio,
                        gender: res.data.gender,
                        image: res.data.image
                    });
            }


        })
    }

    componentDidMount() {
        this.loadEvents();
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.loadVolunteerData();
        this.setState({
            first_name: decoded.first_name,
            last_name: decoded.last_name,
            email: decoded.email
        })
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }


    // Alert if clicked on outside of element
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.setState({ toggleIndex: undefined })
        }
    }

    editProperty = (e) => {
        const indexOfClicked = [...e.target.parentElement.parentElement.parentElement.children].indexOf(e.target.parentElement.parentElement);
        this.setState({ toggleIndex: indexOfClicked })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            const editVolunteer = {
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
                dob: this.state.dob,
                bio: this.state.bio,
                gender: this.state.gender,
                image: this.state.image
            }
            editVolunteerData(editVolunteer).then(res => {
                this.loadEvents();
            })
        }
        )
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
            {this.state.decoded.kind === "seeker" || !this.state.token ? (
              <h3>Not for you.</h3>
            ) : (
              <div className="container">
                <div className="jumbotron">
                  <table className="table col-md-6 mx-auto">
                    <tbody ref={this.setWrapperRef}>
                      <img
                        className="img-fluid rounded-circle"
                        src={
                          this.state.image === null
                            ? this.state.gender === "Male" ? "../assets/images/profile_male.png" : "../assets/images/profile_female.png"
                            : "../images/" + this.state.image
                        }
                      />
                      <div className="mb-5"></div>
                      <EditableRow
                        className="mt-5"
                        property="First Name"
                        value={this.state.first_name}
                        toggle="view"
                      ></EditableRow>

                      <EditableRow
                        property="Last Name"
                        value={this.state.last_name}
                        toggle="view"
                      ></EditableRow>

                      <EditableRow
                        property="Email"
                        value={this.state.email}
                        toggle="view"
                      ></EditableRow>

                      <EditableRow
                        property="City"
                        name="city"
                        value={this.state.city}
                        onClick={this.editProperty}
                        onChange={this.onChange}
                        toggle={4 === this.state.toggleIndex ? "edit" : "view"}
                      ></EditableRow>

                      <EditableRow
                        property="State"
                        name="state"
                        value={this.state.state}
                        onClick={this.editProperty}
                        onChange={this.onChange}
                        toggle={5 === this.state.toggleIndex ? "edit" : "view"}
                      ></EditableRow>

                      <EditableRow
                        property="Zip"
                        name="zip"
                        value={this.state.zip}
                        onClick={this.editProperty}
                        onChange={this.onChange}
                        toggle={6 === this.state.toggleIndex ? "edit" : "view"}
                      ></EditableRow>

                      <EditableRow
                        property="DOB"
                        namee="dob"
                        value={this.state.dob}
                        onClick={this.editProperty}
                        onChange={this.onChange}
                        toggle={7 === this.state.toggleIndex ? "edit" : "view"}
                      ></EditableRow>

                      <EditableRow
                        property="Bio"
                        name="bio"
                        value={this.state.bio}
                        onClick={this.editProperty}
                        onChange={this.onChange}
                        toggle={8 === this.state.toggleIndex ? "edit" : "view"}
                      ></EditableRow>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        );
    }

}


export default VolunteerProfile



