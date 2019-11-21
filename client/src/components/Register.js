import React, { Component } from 'react'


class Register extends Component {

  render(props) {
    return (

      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate>
              <h1 className="h3 mb-3 font-weight-normal title">Register</h1>
              <div className="form-group">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  className="form-control"
                  name="first_name"
                  placeholder="Enter your first name"
                  value={this.props.first_name}
                  onChange={this.props.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  className="form-control"
                  name="last_name"
                  placeholder="Enter your lastname name"
                  value={this.props.last_name}
                  onChange={this.props.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.props.email}
                  onChange={this.props.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
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
          </div>
        </div>
      </div>
    )
  }
}

export default Register
