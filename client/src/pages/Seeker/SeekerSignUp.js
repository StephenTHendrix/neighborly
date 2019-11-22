import React, { Component } from "react";
import Register from "../../components/Register";
import { seekerRegister } from '../../components/UserFunctions'

class SeekerSignUp extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            errors: {},
            companyName: '',
            type: '',
            street: '',
            city: '',
            state: '',
            zip: '',
            bio: '',
            website: '',
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
        const newSeeker = {
            companyName: this.state.companyName,
            type: this.state.type,
            street: this.state.street,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            bio: this.state.bio,
            website: this.state.website,
            image: this.state.image
        }
        seekerRegister(newUser, newSeeker).then(res => {
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
                        <label htmlFor="companyName">Company Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="companyName"
                            placeholder="Enter company name"
                            value={this.state.companyName}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type</label>
                        <input
                            type="text"
                            className="form-control"
                            name="type"
                            placeholder="Organization/individual"
                            value={this.state.type}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="street">Street</label>
                        <input
                            type="text"
                            className="form-control"
                            name="street"
                            placeholder="Enter company address"
                            value={this.state.street}
                            onChange={this.onChange}
                        />
                    </div>
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
                            placeholder="State"
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
                            placeholder="zip"
                            value={this.state.zip}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Bio:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="bio"
                            placeholder="bio"
                            value={this.state.bio}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="website">Website URL</label>
                        <input
                            type="text"
                            className="form-control"
                            name="website"
                            placeholder="website"
                            value={this.state.website}
                            onChange={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">image</label>
                        <input
                            type="text"
                            className="form-control"
                            name="image"
                            placeholder="image"
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


export default SeekerSignUp;


