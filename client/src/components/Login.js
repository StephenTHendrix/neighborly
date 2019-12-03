import React, { Component } from 'react'
import { login } from './UserFunctions'
// const jwt = require('jsonwebtoken')
import jwt_decode from 'jwt-decode'


class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
      console.log(decoded)

      if (res && decoded.kind === "volunteer") {
        this.props.history.push(`/volunteer`)
      }
      else if (res && decoded.kind === "seeker") {
        this.props.history.push(`/seeker`)
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-sub btn-block"
              >
                Sign in
              </button>
              
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
