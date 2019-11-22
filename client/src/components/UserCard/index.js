import React from "react";


function UserCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        {/* <img alt={props.name} src={props.image} /> */}
      </div>
      <div className="content">
        <ul>
          <li>ID: {props.id}</li>
          <li>
            <strong>Name:</strong> {props.first_name}
          </li>
          <li>
            {/* <strong>Occupation:</strong> {props.occupation} */}
          </li>
          <li>
            {/* <strong>Location:</strong> {props.location} */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserCard;
