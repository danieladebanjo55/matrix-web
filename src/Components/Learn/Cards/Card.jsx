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
            <video src={Video} controls muted></video>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
