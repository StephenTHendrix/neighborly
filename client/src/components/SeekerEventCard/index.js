import React from "react";
import User from "../User"
function SeekerEventCard(props) {
  return (
    <div>
      <div class="card bg-dark text-white col-xs-12 mt-2">
        <img
          class="card-img"
          src={
            props.image === null
              ? "../assets/images/placeholder_event.jpg"
              : "../images/" + props.image
          }
          // src={"../images/" + props.image}
          alt="Card image"
        />
        <div class="card-img-overlay p-0">
          <h5 class="card-header">{props.title}</h5>
          <div className="event-info">
            <h6 className="card-text pl-3 pt-2">
              {props.date} {props.time} {props.ampm}
            </h6>
            <p class="card-text pl-3">{props.description}</p>
          </div>
        </div>
        <div className="card-footer">
          <p className="card-text">
            Currently Registered: {props.registered} / {props.needed}
          </p>
          <button
            type="button"
            class="btn btn-sub"
            data-toggle="modal"
            data-target={"#" + props.id}
          >
            List of Registered Volunteer
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id={props.id}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Currently Registered: {props.registered} / {props.needed}{" "}
              </h5>
              <button
                type="button"
                className="close text-white"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {props.userVolunteer ? (
                props.userVolunteer.map(user => {
                  return (
                    <User
                      first_name={user.first_name}
                      last_name={user.last_name}
                      email={user.email}
                      gender={user.gender}
                      image={user.image}
                      city={user.city}
                      state={user.state}
                      bio={user.bio}
                    ></User>
                  );
                })
              ) : (
                  <p> No One Registered Yet</p>
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SeekerEventCard;
