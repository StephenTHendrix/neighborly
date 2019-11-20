import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import Pages ==========================================================================================
import Welcome from "./pages/Welcome";
import VolunteerSignUp from "./pages/Volunteer/VolunteerSignUp"
import VolunteerDashboard from "./pages/Volunteer/VolunteerDashboard"
import VolunteerProfile from "./pages/Volunteer/VolunteerProfile"
import SeekerSignUp from "./pages/Seeker/SeekerSignUp"
import SeekerDashboard from "./pages/Seeker/SeekerDashboard"
import SeekerDashboard from "./pages/Seeker/SeekerProfile"
//========================================================================================================

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/volunteer/signup" component={VolunteerSignUp} />
          <Route exact path="/volunteer" component={VolunteerDashboard} />
          <Route exact path="/volunteer/profile" component={VolunteerProfile} />
          <Route exact path="/seeker/signup" component={SeekerSignUp} />
          <Route exact path="/seeker" component={SeekerDashboard} />
          <Route exact path="/seeker/profile" component={SeekerProfile} />
        </Switch>
      </Router>
    )
  }
}

export default App;
