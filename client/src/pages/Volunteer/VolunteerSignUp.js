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

        if (e.target.name === "dob") {
            var numChars = e.target.value.length;
            if (numChars === 2 || numChars === 5) {
                var thisVal = e.target.value;
                thisVal += '/';
                e.target.value = thisVal;

                this.setState({ [e.target.name]: thisVal });
                console.log(thisVal)
                console.log("Chars: " + numChars)
            }
        }
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
            <div class="container">
                < div >
                    <Register
                        first_name={this.state.first_name}
                        last_name={this.state.last_name}
                        email={this.state.email}
                        password={this.state.password}
                        onChange={this.onChange}
                        onSubmit={this.onSubmit}
                    />

                    <form>
                        {/* <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Password</label>
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
                            </div>
                        </div> */}
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">City</label>
                                <input
                                    className="form-control"
                                    id="inputCity"
                                    name="city"
                                    type="text"
                                    value={this.state.city}
                                    onChange={this.onChange}
                                >
                                </input>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">State</label>
                                <select
                                    id="inputState"
                                    className="form-control"
                                    name="state"
                                    value={this.state.state}
                                    onChange={this.onChange}>
                                    <option selected>Choose...</option>
                                    <option>Alabama - AL</option>
                                    <option>Alaska - AK</option>
                                    <option>Arizona - AZ</option>
                                    <option>Arkansas - AR</option>
                                    <option>California - CA</option>
                                    <option>Colorado - CO</option>
                                    <option>Connecticut - CT</option>
                                    <option>Delaware - DE</option>
                                    <option>Florida - FL</option>
                                    <option>Georgia - GA</option>
                                    <option>Hawaii - HI</option>
                                    <option>Idaho - ID</option>
                                    <option>Illinois - IL</option>
                                    <option>Indiana - IN</option>
                                    <option>Iowa - IA</option>
                                    <option>Kansas - KS</option>
                                    <option>Kentucky - KY</option>
                                    <option>Louisiana - LA</option>
                                    <option>Maine - ME</option>
                                    <option>Maryland - MD</option>
                                    <option>Massachusetts - MA</option>
                                    <option>Michigan - MI</option>
                                    <option>Minnesota - MN</option>
                                    <option>Mississippi - MS</option>
                                    <option>Missouri - MO</option>
                                    <option>Montana - MT</option>
                                    <option>Nebraska - NE</option>
                                    <option>Nevada - NV</option>
                                    <option>New Hampshire - NH</option>
                                    <option>New Jersey - NJ</option>
                                    <option>New Mexico - NM</option>
                                    <option>New York - NY</option>
                                    <option>North Carolina - NC</option>
                                    <option>North Dakota - ND</option>
                                    <option>Ohio - OH</option>
                                    <option>Oklahoma - OK</option>
                                    <option>Oregon - OR</option>
                                    <option>Pennsylvania - PA</option>
                                    <option>Rhode Island - RI</option>
                                    <option>South Carolina - SC</option>
                                    <option>South Dakota - SD</option>
                                    <option>Tennessee - TN</option>
                                    <option>Texas - TX</option>
                                    <option>Utah - UT</option>
                                    <option>Vermont - VT</option>
                                    <option>Virginia - VA</option>
                                    <option>Washington - WA</option>
                                    <option>West Virginia - WV</option>
                                    <option>Wisconsin - WI</option>
                                    <option>Wyoming - WY</option>
                                </select>
                            </div>
                            <div className="form-group col-md-2">
                                <label htmlfor="inputZip">Zip</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputZip"
                                    name="zip"
                                    value={this.state.zip}
                                    onChange={this.onChange}
                                >
                                </input>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-12">
                                <label htmlFor="exampleFormControlTextarea1">Biography</label>
                                <textarea
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    type="text"
                                    className="form-control"
                                    name="bio"
                                    value={this.state.bio}
                                    onChange={this.onChange}>
                                </textarea>
                            </div>
                        </div>


                        <div className="form-row">

                            <div className="form-group col-md-2">
                                <label htmlFor="exampleFormControlTextarea1">Date of Birth</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="dob"
                                    id="dob"
                                    placeholder="mm/dd/yyyy"
                                    maxlength="10"
                                    value={this.state.dob}
                                    onChange={this.onChange} />
                            </div>


                            <fieldset class="form-group ml-5">
                                <div className="row">
                                    <legend className="col-form-label col-sm-2 pt-0 mr-3">Gender</legend>
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked></input>
                                            <label className="form-check-label" for="gridRadios1">
                                                Male
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"></input>
                                            <label className="form-check-label" for="gridRadios2">
                                                Female
                                        </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="gridRadios"
                                                id="gridRadios3"
                                                value="option3"
                                            ></input>Other<input type="text"
                                                className="form-control"
                                                id="inputGender"
                                                name="gender"
                                                value={this.state.gender}
                                                onChange={this.onChange}></input>

                                            {/* <label className="form-check-label" for="gridRadios3">
                                                Other
                                            </label> */}
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                        </div>
                    </form>

                    {/* <div className="form-group">
                        <label htmlFor="gender">Gender</label>
                        <input
                            type="text"
                            className="form-control"
                            name="gender"
                            placeholder="Enter email"
                            value={this.state.gender}
                            onChange={this.onChange}
                        />
                    </div> */}
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
                </div >
            </div >
        )
    }
}

{/* <script
    src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous"></script> */}

export default VolunteerSignUp;


