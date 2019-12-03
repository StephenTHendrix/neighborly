import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { getSeekerData, editSeekerData } from '../../components/UserFunctions'
import EditableRow from "../../components/EditableRow"

class SeekerProfile extends Component {
    constructor() {
        super()
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            companyName: '',
            bio: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            website: '',
            errors: {},
            events: [],
            toggleIndex: undefined
        }
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }


    loadSeekerData = () => {
        getSeekerData().then(res => {
            this.setState({
                companyName: res.data.companyName,
                address1: res.data.address1,
                address2: res.data.address2,
                city: res.data.city,
                state: res.data.state,
                zip: res.data.zip,
                website: res.data.website,
                bio: res.data.bio
            })
        })
    }


    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.loadSeekerData();
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
            this.setState({ toggleIndex: -1 })
        }
    }


    editProperty = (e) => {
        const indexOfClicked = [...e.target.parentElement.parentElement.parentElement.children].indexOf(e.target.parentElement.parentElement);
        this.setState({ toggleIndex: indexOfClicked })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            const editSeeker = {
                companyName: this.state.companyName,
                address1: this.state.address1,
                address2: this.state.address2,
                city: this.state.city,
                state: this.state.state,
                zip: this.state.zip,
                bio: this.state.bio,
                website: this.state.website,
            }
            editSeekerData(editSeeker).then(res => {
            })
        }
        )
    }


    render() {
        return (
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody ref={this.setWrapperRef}>
                            <EditableRow
                                property="First Name"
                                value={this.state.first_name}
                                toggle="view">
                            </EditableRow>

                            <EditableRow
                                property="Last Name"
                                value={this.state.last_name}
                                toggle="view">
                            </EditableRow>

                            <EditableRow
                                property="Email"
                                value={this.state.email}
                                toggle="view">
                            </EditableRow>

                            {this.state.companyName !== "" ?
                                <EditableRow
                                    property="Company Name"
                                    name="companyName"
                                    value={this.state.companyName}
                                    onClick={this.editProperty}
                                    onChange={this.onChange}
                                    toggle={3 === this.state.toggleIndex ? "edit" : "view"}>
                                </EditableRow>
                                :
                                <div></div>}

                            <EditableRow
                                property="Bio"
                                name="bio"
                                value={this.state.bio}
                                onClick={this.editProperty}
                                onChange={this.onChange}
                                toggle={4 === this.state.toggleIndex ? "edit" : "view"}>
                            </EditableRow>

                            <EditableRow
                                property="Address"
                                name="address1"
                                value={this.state.address1}
                                onClick={this.editProperty}
                                onChange={this.onChange}
                                toggle={5 === this.state.toggleIndex ? "edit" : "view"}>
                            </EditableRow>

                            <EditableRow
                                property="Address 2"
                                name="address2"
                                value={this.state.address2}
                                onClick={this.editProperty}
                                onChange={this.onChange}
                                toggle={6 === this.state.toggleIndex ? "edit" : "view"}>
                            </EditableRow>

                            <EditableRow
                                property="City"
                                name="city"
                                value={this.state.city}
                                onClick={this.editProperty}
                                onChange={this.onChange}
                                toggle={7 === this.state.toggleIndex ? "edit" : "view"}>
                            </EditableRow>

                            <EditableRow
                                property="State"
                                name="state"
                                value={this.state.state}
                                onClick={this.editProperty}
                                onChange={this.onChange}
                                toggle={8 === this.state.toggleIndex ? "edit" : "view"}>
                            </EditableRow>

                            <EditableRow
                                property="Zip"
                                name="zip"
                                value={this.state.zip}
                                onClick={this.editProperty}
                                onChange={this.onChange}
                                toggle={9 === this.state.toggleIndex ? "edit" : "view"}>
                            </EditableRow>
                        </tbody>
                    </table>
                </div>

            </div >
        )
    }
}

export default SeekerProfile
