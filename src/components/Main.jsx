import React from "react";

export default function Main(props) {
  return (
    <div className="col-sm-4">
      <div className={`card ${props.theme.bgColor}`}>
        <div className="card-body">
          <h5 className={`card-title ${props.theme.textColor}`}>Main Page</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className={`card-text ${props.theme.textColor}`}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}