import React from "react";

function InterestedEvent(props) {
  return (
    <div>
      <div className="card mt-2">
        <div className="card-header p-3">
          <h5>{props.title}</h5>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle mb-2 text-muted">
            {props.organization}
          </h6>
          <p className="card-text">{props.smalldescription}</p>
          <small className="text-muted">
            Attendees: {props.signup} / {props.needed}
          </small>
        </div>
        <div className="card-footer">
          {/* {(props.date || props.time) ? */}
          <small className="text-muted">
            {props.date} {props.time}
          </small>
          {/* :
          <small className="text-muted">{props.flexible}</small>
        } */}
        </div>
        <button type="button" className="btn btn-sub" data-toggle="modal" data-target={"#" + props.id}>
          More Information</button>
      </div>

      <div className="modal fade" id={props.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {props.title}
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
              <h6 className="card-subtitle mb-2 text-muted">
                {props.organization}
              </h6>
              <p>{props.description}</p>
            </div>
            <div className="modal-footer">
              <p>
                Attendees: {props.signup}/{props.needed}
              </p>
              <p>
                Address: {props.street} {props.city} {props.state}
              </p>
              <p className="text-muted">
                {props.date} {props.time}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterestedEvent;
