import React from "react";


function User(props) {
  return (
    <div className="card col-lg-6 col-md-12 m-1 p-0">
      <div className="card-header p-3">
        <h5>
          {props.first_name} {props.last_name}
        </h5>
      </div>

      <div className="card-body">
        <p>
          Contact: {props.email}
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

export default User;
