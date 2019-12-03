import React from "react";
import User from "../User"
function SeekerEventCard(props) {
  return (
    <div>
      <div className="card mt-2">
        <div className="card-header p-3">
          <h5>{props.title}</h5>
        </div>
        <div className="card-body">
          <h6 className="card-text">{props.date} {props.time}</h6>
          <p className="card-text">{props.description}</p>

        </div>
        <div className="card-footer">
          <p className="card-text">Current Registered: {props.registered} / {props.needed}</p>
          <button type="button" class="btn btn-sub" data-toggle="modal" data-target={"#" + props.id}>
            List of Registered Volunteer</button>
        </div>
      </div>

      <div className="modal fade" id={props.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Current Registered: {props.registered} / {props.needed} </h5>
              <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {
                props.userVolunteer
                  ? props.userVolunteer.map(user => {
                    return <User first_name={user.first_name} last_name={user.last_name} email={user.email}></User>
                  })
                  : <p> No One Registered Yet</p>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SeekerEventCard;
