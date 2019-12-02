import React from "react";


function UserCard(props) {
  return (
    <div className="card mt-3">
      <h5 className="card-header">{props.first_name} {props.last_name}</h5>
      <div className="card-body">
        <h5 className="card-title">{props.city}, {props.state}</h5>
        <p className="card-text">{props.bio}</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>

    // <div className="card">
    //   <div className="img-container">
    //     {/* <img alt={props.name} src={props.image} /> */}
    //   </div>
    //   <div className="content">
    //     <ul>
    //       <li>ID: {props.id}</li>
    //       <li>
    //         <strong>Name:</strong> {props.first_name}
    //       </li>
    //       <li>
    //         {/* <strong>Occupation:</strong> {props.occupation} */}
    //       </li>
    //       <li>
    //         {/* <strong>Location:</strong> {props.location} */}
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}

export default UserCard;
