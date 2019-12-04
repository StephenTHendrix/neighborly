import React, { Component } from "react";
import Register from "../../components/Register";
import { seekerRegister } from '../../components/UserFunctions'
import jwt_decode from 'jwt-decode';

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
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            bio: '',
            website: '',
            image: '',
            token: {},
            decoded: {},
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        if (localStorage.usertoken) {
            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            this.setState({
                token: token,
                decoded: decoded
            })
        } else {
            this.setState({
                token: false,
                decoded: false
            })
        }
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
            address1: this.state.address1,
            address2: this.state.address2,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            bio: this.state.bio,
            website: this.state.website,
            image: this.state.image
        }
        seekerRegister(newUser, newSeeker)
        // .then(res => {
        this.props.history.push(`/login`)
        // })
    }



    render() {

        return (

            <div className="container">


                {this.state.decoded.kind ? (<h3>Sign out before continuing!</h3>) : (
                    <div>

                        <Register
                            first_name={this.state.first_name}
                            last_name={this.state.last_name}
                            email={this.state.email}
                            password={this.state.password}
                            onChange={this.onChange}
                            onSubmit={this.onSubmit}
                        />
                        <div className="row">


                            <fieldset className="form-group col-md-5">
                                <div className="row">
                                    <legend className="col-form-label col-sm-4 pt-0">*Type</legend>
                                    <div className="col-sm-8">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="type"
                                                id="gridRadios1"
                                                value="Company/Organization"
                                                onChange={this.onChange}
                                            ></input>
                                            <label className="form-check-label" htmlFor="gridRadios1">
                                                Company/Organization
                                    </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="type"
                                                id="gridRadios2"
                                                value="Individual"
                                                onChange={this.onChange}></input>
                                            <label className="form-check-label" htmlFor="gridRadios2">
                                                Individual
                                    </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            {this.state.type === "Company/Organization" ?

                                (< div className="form-group col-md-7">
                                    <label htmlFor="companyName">Company Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="companyName"
                                        placeholder="Enter company name"
                                        value={this.state.companyName}
                                        onChange={this.onChange}
                                    />
                                </div>)
                                // && this.setState({ [this.state.companyName]: "null" })
                                : <div></div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="inputAddress">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                name="address1"
                                id="inputAddress"
                                placeholder="1234 Main St"
                                value={this.state.address1}
                                onChange={this.onChange}></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Address 2</label>
                            <input
                                type="text"
                                className="form-control"
                                name="address2"
                                id="inputAddress2"
                                placeholder="Apartment, studio, or floor"
                                value={this.state.address2}
                                onChange={this.onChange}></input>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputCity">*City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="city"
                                    id="inputCity"
                                    value={this.state.city}
                                    onChange={this.onChange}></input>
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="inputState">*State</label>
                                <select
                                    id="inputState"
                                    className="form-control"
                                    name="state"
                                    value={this.state.state}
                                    onChange={this.onChange}>>
                            <option defaultValue>Choose...</option>
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
                                <label htmlFor="inputZip">Zip</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="zip"
                                    id="inputZip"
                                    value={this.state.zip}
                                    onChange={this.onChange}></input>
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
                        <div className="form-group col">
                            <label htmlFor="website">Website URL</label>
                            <input
                                type="text"
                                className="form-control"
                                name="website"
                                placeholder="website"
                                value={this.state.website}
                                onChange={this.onChange}
                            />
                            {/* <div className="form-group col-md-6">
                                <label htmlFor="image">Image</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="image"
                                    placeholder="image"
                                    value={this.state.image}
                                    onChange={this.onChange}
                                />
                            </div> */}
                        </div >


                        <button
                            type="submit"
                            className="btn btn-lg btn-sub mb-5"
                            onClick={this.onSubmit}
                        >
                            Register!
              </button>
                    </div >)
                } </div>

        )
    }
}


export default SeekerSignUp;


