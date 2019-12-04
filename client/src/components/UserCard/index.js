import React from "react";

function UserCard(props) {


  return (
    <div className="card col-lg-5 col-md-12 m-1 p-0">
      <div className="card-header p-3">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <h5>
              {props.first_name} {props.last_name}
            </h5>
            <p>
              {props.city}, {props.state}
            </p>
          </div>
          <div className="col-md-4">
            <img
              className="img-fluid rounded-circle"
              src={
                props.image === null
                  ? props.gender === "Male"
                    ? "../assets/images/profile_male.png"
                    : "../assets/images/profile_female.png"
                  : "../images/" + props.image
              }
            />
          </div>
        </div>
      </div>

      <div className="card-body">
        <p className="card-text">{props.bio}</p>
        <p>
          Contact: <a href={"mailto:" + props.email}>{props.email}</a>
        </p>
      </div>
    </div>
  );
}

export default UserCard;
