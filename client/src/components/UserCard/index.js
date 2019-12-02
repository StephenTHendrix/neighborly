import React from "react";


function UserCard(props) {
  return (
    <div className="card col-lg-5 col-md-12 m-1 p-0">
      <div className="card-header p-3">
        <h5>
          {props.first_name} {props.last_name}
        </h5>
        <p>
          {props.city}, {props.state}
        </p>
      </div>

      <div className="card-body">
        <p className="card-text">{props.bio}</p>
        <p>
          Contact: <a href={"mailto:" + props.email}>{props.email}</a>
        </p>
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
