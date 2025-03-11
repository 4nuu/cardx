import React from "react";
import "./VisitingCard.css";
import SocialButtons from "../Social-buttons/Social";

const VisitingCard = () => {
  return (
    <div className="card-wrapper">
      <div className="card-container bg-cover">
        <div className="card-image">
          <img src="https://fastly.picsum.photos/id/639/200/300.jpg?hmac=dITw9zyqi0A4tZ6lMk191HJezQPJDDKG4wyJXadYRH0" alt="profile" />
        </div>
        <div className="card-name">
          <h3>John Doe</h3>
        </div>
        <div className="card-position">
          <h5>BDE</h5>
        </div>
        <div className="SocialButtons">
          <SocialButtons />
        </div>
      </div>
    </div>
  );
};

export default VisitingCard;