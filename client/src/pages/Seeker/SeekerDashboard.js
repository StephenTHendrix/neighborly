import React, { Component } from "react";
import { getUsers } from '../../components/UserFunctions.js'
// import API from "../../utils/API";
// import axios from "axios";
import UserCard from "../../components/UserCard";
// import User from "../models";

class SeekerDashboard extends Component {
  state = {
    allUsers: []
  };

loadUsers = () => {
  getUsers().then(res => {
    console.log('SEEKERDASHBOARD: ', res)
    
      this.setState({
        allUsers: res.data,
      })
    
      
      console.log(this.state.allUsers)
    })
    .catch(err => console.log(err));
}

componentDidMount() {
  this.loadUsers()
}

render() {
  return (
    <div>
      {this.state.allUsers.map(user => (
              <UserCard key={user.id} first_name = {user.first_name}>
                
                
               
                
              </UserCard>
            ))}
      </div>
  )
}
}

export default SeekerDashboard;
