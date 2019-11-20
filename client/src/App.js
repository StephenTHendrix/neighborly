import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Import Components ==========================================================================================
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
// Import Pages ===============================================================================================
import Landing from './pages/Landing'
import VolunteerSignUp from "./pages/Volunteer/VolunteerSignUp"
import VolunteerDashboard from "./pages/Volunteer/VolunteerDashboard"
import VolunteerProfile from "./pages/Volunteer/VolunteerProfile"
import SeekerSignUp from "./pages/Seeker/SeekerSignUp"
import SeekerDashboard from "./pages/Seeker/SeekerDashboard"
import SeekerProfile from "./pages/Seeker/SeekerProfile"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />

            <Route exact path="/volunteer/signup" component={VolunteerSignUp} />
            <Route exact path="/volunteer" component={VolunteerDashboard} />
            <Route exact path="/volunteer/profile" component={VolunteerProfile} />
            <Route exact path="/seeker/signup" component={SeekerSignUp} />
            <Route exact path="/seeker" component={SeekerDashboard} />
            <Route exact path="/seeker/profile" component={SeekerProfile} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
