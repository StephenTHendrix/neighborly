import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Import Components ==========================================================================================
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
// import Profile from './components/unusedVolunteerProfile'
// Import Pages ===============================================================================================
import Landing from "./pages/Landing";
import VolunteerSignUp from "./pages/Volunteer/VolunteerSignUp";
import VolunteerDashboard from "./pages/Volunteer/VolunteerDashboard";
import VolunteerSearch from "./pages/Volunteer/VolunteerSearch";
import VolunteerProfile from "./pages/Volunteer/VolunteerProfile";
import SeekerSignUp from "./pages/Seeker/SeekerSignUp";
import SeekerDashboard from "./pages/Seeker/SeekerDashboard";
import SeekerProfile from "./pages/Seeker/SeekerProfile";
import ViewEvents from "./pages/Seeker/ViewEvents";
import CreateEvent from "./pages/Seeker/CreateEvent";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />

          <div>
            <div>
              {" "}
              {localStorage.usertoken ? (
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route
                    exact
                    path="/volunteer/signup"
                    component={VolunteerSignUp}
                  />
                  <Route
                    exact
                    path="/volunteer"
                    component={VolunteerDashboard}
                  />
                  <Route
                    exact
                    path="/volunteer/search"
                    component={VolunteerSearch}
                  />
                  <Route
                    exact
                    path="/volunteer/profile"
                    component={VolunteerProfile}
                  />
                  <Route exact path="/seeker/signup" component={SeekerSignUp} />
                  <Route exact path="/seeker" component={SeekerDashboard} />
                  <Route exact path="/seeker/create" component={CreateEvent} />
                  <Route
                    exact
                    path="/seeker/profile"
                    component={SeekerProfile}
                  />
                  <Route exact path="/seeker/events" component={ViewEvents} />
                </Switch>
              ) : (
                <Switch>
                  <Route exact path="/" component={Landing} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                  <Route
                    exact
                    path="/volunteer/signup"
                    component={VolunteerSignUp}
                  />
                  <Route exact path="/volunteer" component={Landing} />
                  <Route exact path="/volunteer/search" component={Landing} />
                  <Route exact path="/volunteer/profile" component={Landing} />
                  <Route exact path="/seeker/signup" component={SeekerSignUp} />
                  <Route exact path="/seeker" component={Landing} />
                  <Route exact path="/seeker/create" component={Landing} />
                  <Route
                    exact
                    path="/seeker/profile"
                    component={Landing}
                  />
                  <Route exact path="/seeker/events" component={Landing} />
                </Switch>
              )}{" "}
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
