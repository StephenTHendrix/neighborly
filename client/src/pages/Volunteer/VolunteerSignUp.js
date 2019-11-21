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
            city: ''

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
            city: this.state.city
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


