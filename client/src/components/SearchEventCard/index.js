import React from "react";

function SearchEventCard(props) {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.title} {props.id}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.organization}</h6>
        <p className="card-text">{props.smalldescription}</p>

      </div>
      <div className="card-footer">
        {(props.date || props.time) ?
          <small className="text-muted">{props.date}   {props.time}</small>
          :
          <small className="text-muted">{props.flexible}</small>
        }
        <buton className="saved btn btn-primary" id={props.id} onClick={() => props.handleEventSignUp(props.id)}> I'm interest</buton>
      </div>
      <button key={props.id} id={props.id}>Nothing Yet (Modal Probably)</button>
    </div>
  );
}

export default SearchEventCard;
