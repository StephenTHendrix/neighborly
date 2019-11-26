import React, { Component } from "react";
import { getUsers } from '../../components/UserFunctions.js'
// import API from "../../utils/API";
// import axios from "axios";
import UserCard from "../../components/UserCard";
// import User from "../models";
import jwt_decode from 'jwt-decode';

class SeekerDashboard extends Component {
  state = {
    allUsers: [],
    token: {},
    decoded: {},
  };

loadUsers = () => {
  getUsers().then(res => {
    console.log('SEEKERDASHBOARD: ', res)
    
    {typeof res.data === "string" ? (
      this.setState({
        allUsers: [],
      })) : (
        this.setState({
          allUsers: res.data,
        })
      )}
    
      
      console.log(this.state.allUsers)
    })
    .catch(err => console.log(err));
}

componentDidMount() {
  this.loadUsers()
}

render() {
  if (localStorage.usertoken) {
  this.state.token = localStorage.usertoken
  this.state.decoded = jwt_decode(this.state.token)
  }

  else {
    this.state.token = false;
    this.state.decoded = false;
  }
  return (
  
  
    <div>
    {this.state.decoded.kind === "volunteer" || !this.state.token ? 
    (<h3>Not for you.</h3>) : (<div>
      {this.state.allUsers.length ?
      (<div>
        {this.state.allUsers.map(user => (
                <UserCard key={user.id} first_name = {user.first_name}>
                  
                  
                 
                  
                </UserCard>
              ))}
        </div>) : (<h3>No users found.</h3>)}</div>)}</div>

  
  // <div>
  //   {this.state.allUsers.length ?
  //   (<div>
  //     {this.state.allUsers.map(user => (
  //             <UserCard key={user.id} first_name = {user.first_name}>
                
                
               
                
  //             </UserCard>
  //           ))}
  //     </div>) : (<h3>No users found.</h3>)}</div>
  )
}
}

export default SeekerDashboard;
