import React, { Component } from 'react'


class Register extends Component {

  render(props) {
    return (
      // <div className="row">
      //   <div className="col-md-6 mt-5 mx-auto">

      // <div className="container">
      <form>
        <h1 className="h3 mb-3 font-weight-normal text-center sub-title">Register</h1>
        <p className="required mb-3 font-weight-normal text-center">Items marked with an asterisk are required</p>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="name">*First name</label>
            <input
              type="text"
              className="form-control"
              name="first_name"
              placeholder="Enter your first name"
              value={this.props.first_name}
              onChange={this.props.onChange}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="name">*Last name</label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              placeholder="Enter your last name"
              value={this.props.last_name}
              onChange={this.props.onChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email">*Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            value={this.props.email}
            onChange={this.props.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">*Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            value={this.props.password}
            onChange={this.props.onChange}
          />
        </div>
        {/* <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Register!
              </button> */}
      </form>
      // </div>
      // </div >
      // </div >
    )
  }
}

export default Register
