import React, { Component } from "react";
import ReactDOM from "react-dom"
import Register from "../../components/Register";
import { volunteerRegister } from '../../components/UserFunctions'



// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import jwt_decode from 'jwt-decode';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

class VolunteerSignUp extends Component {


    constructor(props) {
        super(props)
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
            image: '',
            files: [],
            token: {},
            decoded: {},
        }
        this.BACKSPACE = 8;
        this.DELETE_KEY = 46;
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }


    componentDidMount() {
        this.node = ReactDOM.findDOMNode(this);
        document.cookie = "imageUpload= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
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

    handleInit() {
        console.log('FilePond instance has initialised', this.pond);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        if (e.target.name === "dob") {
            var numChars = e.target.value.length;
            if (this.state[e.target.name].length < e.target.value.length && (numChars === 2 || numChars === 5)) {
                var thisVal = e.target.value;
                thisVal += '/';
                e.target.value = thisVal;
                this.setState({ [e.target.name]: thisVal });
            }
        }
    }

    onSubmit(e) {
        e.preventDefault()
        this.setState({ image: document.cookie.split('=')[1] })
        const imgCookie = document.cookie.split('=')[1]
        console.log("Img cookie: " + imgCookie)

        setTimeout(() => {
            console.log(this.state.image)

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
            volunteerRegister(newUser, newVolunteer)
            this.props.history.push(`/login`)
        }, 1000)
    }

    render() {

        return (
            <div>
                {this.state.decoded.kind ? (<h3>Sign out before continuing!</h3>) : (
                    <div className="container">
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
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="inputCity">*City</label>
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
                                        <label htmlFor="inputState">*State</label>
                                        <select
                                            id="inputState"
                                            className="form-control"
                                            name="state"
                                            value={this.state.state}
                                            onChange={this.onChange}>
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
                                            maxLength="10"
                                            value={this.state.dob}
                                            onChange={this.onChange} />
                                    </div>


                                    <fieldset className="form-group ml-5">
                                        <div className="row">
                                            <legend className="col-form-label col-sm-2 pt-0 mr-3">Gender</legend>
                                            <div className="col-sm-10">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="gender"
                                                        id="gridRadios1"
                                                        value="Male"
                                                        onChange={this.onChange}
                                                    ></input>
                                                    <label className="form-check-label" htmlFor="gridRadios1">
                                                        Male
                                            </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="gender"
                                                        id="gridRadios2"
                                                        onChange={this.onChange}
                                                        value="Female"></input>
                                                    <label className="form-check-label" htmlFor="gridRadios2">
                                                        Female
                                        </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="gender"
                                                        id="gridRadios3"
                                                        value="Other"
                                                        onChange={this.onChange}
                                                    ></input>Other
                                            {this.state.gender !== "Male" && this.state.gender !== "Female" && this.state.gender !== "" || this.node !== undefined && this.node.querySelector("#gridRadios3").checked ? <input type="text"
                                                        className="form-control"
                                                        id="inputGender"
                                                        name="gender"
                                                        placeholder="Other"
                                                        value={this.state.gender}
                                                        onChange={this.onChange}></input>
                                                        : <div> </div>}
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>

                                </div>
                            </form>

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
                                className="btn btn-lg btn-sub mb-5"
                                onClick={this.onSubmit}
                            >
                                Register!
              </button>
                        </div >
                    </div >)}</div>
        )
    }
}

export default VolunteerSignUp;


