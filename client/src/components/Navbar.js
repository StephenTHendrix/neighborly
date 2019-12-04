import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { login } from "./UserFunctions";
import jwt_decode from 'jwt-decode';

class Landing extends Component {
  constructor() {

    super();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    if (localStorage.usertoken) {
      const token = localStorage.usertoken;
      const decoded = jwt_decode(token);
      this.state = {
        email: "",
        password: "",
        errors: {},
        token: token,
        decoded: decoded,
      };
    } else {
      this.state = {
        email: "",
        password: "",
        errors: {},
        token: false,
        decoded: false,
      };
    }


  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
      this.setState({token: token, decoded: decoded})

      if (res && decoded.kind === "volunteer") {
        this.props.history.push(`/volunteer`)
      }
      else if (res && decoded.kind === "seeker") {
        this.props.history.push(`/seeker`)
      }
    })
  }

  logOut(e) {
    e.preventDefault();
    localStorage.removeItem("usertoken");
    this.props.history.push(`/`);
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <div className="dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Login
            </button>
            <form
              className="dropdown-menu dropdown-menu-right"
              noValidate
              onSubmit={this.onSubmit}
            >
              <h1 className="h3 mb-3 text-block-small">Please sign in</h1>
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
                className="btn btn-sub"
              >
                Sign in
              </button>
            </form>
          </div>
        </li>
        <li className="nav-item">
          <Link to="/volunteer/signup" className="nav-link">
            Sign Up As Volunteer
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/seeker/signup" className="nav-link">
            Sign Up As Seeker
          </Link>
        </li>
      </ul>
    );

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <div>
            {this.state.decoded.kind === "volunteer" ? (<Link to="/volunteer" className="nav-link">
              Dashboard
          </Link>) : (<Link to="/seeker" className="nav-link">
                Dashboard
          </Link>)} </div>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-lg">
        <button
          className=" custom-toggler navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNeighborly"
          aria-controls="navbarNeighborly"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className=" custom-toggler navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-md-end"
          id="navbarNeighborly"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
      </nav>
    );
  }
}
export default withRouter(Landing)
