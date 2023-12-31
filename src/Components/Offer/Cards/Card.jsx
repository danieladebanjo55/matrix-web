import React from "react";
import "./Card.scss";

function Card({ Heading, Content, Video, Link }) {
  return (
    <>
      <div className="pack__container">
        <div className="pack__content">
          <div className="pack__heading">{Heading}</div>
          <div className="pack__text">{Content}</div>
          <div className="pack__video">
            <video src={Video} controls muted></video>
          </div>
          <div className="card__button">
            <a href={Link} target="_blank">
              <button>See More</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
