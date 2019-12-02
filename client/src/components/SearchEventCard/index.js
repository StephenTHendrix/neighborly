import React from "react";

function SearchEventCard(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.title} {props.id}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.organization}</h6>
          <p className="card-text">{props.smalldescription}</p>

        </div>
        <div className="card-footer">
          {/* {(props.date || props.time) ? */}
          <small className="text-muted">{props.date}   {props.time}</small>
          {/* :
          <small className="text-muted">{props.flexible}</small>
        } */}
        </div>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ModalInformation">
          More Information</button>
      </div>

      <div class="modal fade" id="ModalInformation" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{props.title}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <h6 className="card-subtitle mb-2 text-muted">{props.organization}</h6>
              <p>Current attendees: {props.signup}/{props.needed}</p>
              <p>{props.description}</p>
              <p>Address: {props.street} {props.city} {props.state}</p>
              <small className="text-muted">{props.date}   {props.time}</small>

            </div>
            <div class="modal-footer">
              {(window.location.pathname === "/volunteer/search") ?
                <button className="saved btn btn-primary" key={props.id} id={props.id} onClick={() => props.handleEventSignUp(props.id)}> I'm interest</button>
                :
                null
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default SearchEventCard;
