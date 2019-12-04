import React from "react";

function InterestedEvent(props) {
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
        </div>
        <button
          type="button"
          className="btn btn-sub"
          data-toggle="modal"
          data-target={"#" + props.id}
        >
          More Information
        </button>
      </div>

      <div
        className="modal fade"
        id={props.id}
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
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
                {props.date} {props.time} {props.ampm}
              </p>

              <button
                className="saved btn btn-sub"
                key={props.id}
                id={props.id}
                onClick={() => props.deleteEvent(props.id)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterestedEvent;
