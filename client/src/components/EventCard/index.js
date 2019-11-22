import React from "react";

function EventCard(props) {
  return (
    // <div className="card">
    //   <div className="img-container">
    //     {/* <img alt={props.name} src={props.image} /> */}
    //   </div>
    //   <div className="content">
    //     <ul>
    //       <li>
    //         <strong>Name:</strong> {props.title}
    //       </li>

    //       <li>
    //         <strong>Description:</strong> {props.shortdescription}
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

      </div>
      <button key={props.id} id={props.id}>Nothing Yet (Modal Probably)</button>
    </div>
  );
}

export default EventCard;
