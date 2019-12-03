import React from "react";

function SeekerEventCard(props) {
    return (

        <div className="card">
            <div className="card-header">
                {props.title}
            </div>
            <div className="card-body">
                <h5 className="card-title">Needed: {props.needed}</h5>
                <h6 className="card-text">{props.date} {props.time}</h6>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">View Registered Volunteers</a>
            </div>
        </div>
    )
}

export default SeekerEventCard;