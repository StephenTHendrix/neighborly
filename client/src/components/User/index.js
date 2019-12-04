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
          Contact: <a href={"mailto:" + props.email}>{props.email}</a>
        </p>
      </div>
    </div>

  );
}

export default User;
