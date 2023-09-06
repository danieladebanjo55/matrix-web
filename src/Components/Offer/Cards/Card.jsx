import React from "react";
import "./Card.scss";

function Card({ Heading, Content, Video }) {
  return (
    <>
      <div className="pack__container">
        <div className="pack__content">
          <div className="pack__heading">{Heading}</div>
          <div className="pack__text">{Content}</div>
          <div className="pack__video">
            <video src={Video} controls autoPlay muted></video>
          </div>
          <div className="card__button">
            <button>See More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
