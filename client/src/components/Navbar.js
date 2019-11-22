import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <a href="" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li>
      </ul>
    )

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

          <ul className="navbar-nav">
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

        </div>
      </nav>
    )
  }
}

export default withRouter(Landing)
