// import React from "react";

// function BeLoggedIn() {
//   return <h1>You must be logged in to see this page!</h1>;
// }

// export default BeLoggedIn;

import React from "react";
import { Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router, Route } from "react-router-dom";
import VolunteerDashboard from "./Volunteer/VolunteerDashboard";
import SeekerDashboard from "./Seeker/SeekerDashboard";



class BeLoggedIn extends React.Component {
  // state = {
  //   redirect: false
  // }
  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   })
  // }
  renderRedirect = () => {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    if (decoded.kind === "volunteer") {
      return <Redirect to="/volunteer" />;
    } else if (decoded.kind === "seeker") {
      return <Redirect to="/seeker" />;
    } else {
      return <h1>You must be logged in to see this page!</h1>;
    }
  };
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/volunteer" component={VolunteerDashboard} />
          <Route exact path="/seeker" component={SeekerDashboard} />
          {this.renderRedirect()}
          {/* <button onClick={this.setRedirect}>Redirect</button> */}
        </div>
      </Router>
    );
  }
}
export default BeLoggedIn;
