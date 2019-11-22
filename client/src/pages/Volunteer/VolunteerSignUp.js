import React, { Component } from "react";
import Register from "../../components/Register";
import { volunteerRegister } from '../../components/UserFunctions'

class VolunteerSignUp extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            errors: {},
            city: '',
            state: '',
            zip: '',
            dob: '',
            bio: '',
            gender: '',
            image: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()

        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }
        const newVolunteer = {
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            dob: this.state.dob,
            bio: this.state.bio,
            gender: this.state.gender,
            image: this.state.image
        }
        volunteerRegister(newUser, newVolunteer).then(res => {
            this.props.history.push(`/login`)
        })
    }



    render() {
        return (
            <div>
                <Register
                    first_name={this.state.first_name}
                    last_name={this.state.last_name}
                    email={this.state.email}
                    password={this.state.password}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />
                <div class="container">


                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            className="form-control"
                            name="city"
                            placeholder="Enter email"
                            value={this.state.city}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input
                            type="text"
                            className="form-control"
                            name="state"
                            placeholder="Enter email"
                            value={this.state.state}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zip">Zipcode</label>
                        <input
                            type="text"
                            className="form-control"
                            name="zip"
                            placeholder="Enter email"
                            value={this.state.zip}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth</label>
                        <input
                            type="text"
                            className="form-control"
                            name="dob"
                            placeholder="Enter email"
                            value={this.state.dob}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Biography</label>
                        <input
                            type="text"
                            className="form-control"
                            name="bio"
                            placeholder="Enter email"
                            value={this.state.bio}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <input
                            type="text"
                            className="form-control"
                            name="gender"
                            placeholder="Enter email"
                            value={this.state.gender}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Image</label>
                        <input
                            type="text"
                            className="form-control"
                            name="image"
                            placeholder="Enter email"
                            value={this.state.image}
                            onChange={this.onChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-lg btn-primary btn-block"
                        onClick={this.onSubmit}
                    >
                        Register!
              </button>
                </div>
            </div>
        )
    }
}


export default VolunteerSignUp;


