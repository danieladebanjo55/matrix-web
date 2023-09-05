import React from "react";
import "./Hero.scss";

import Image from "./hero-logo.png";
import Video from "./hero-video.mp4";

function Hero() {
  return (
    <>
      <div className="hero__main__container">
        <div className="hero__content__container">
          <div className="logo__hero">
            <img src={Image} alt="hero-logo" />
          </div>
          <div className="word__hero">
            <h2 className="first__text">
              Everyone Wants To Be <b>Rich...</b> <br />
              But Doesn't Know Where To Start.
            </h2>

            <h3 className="second__text">
              I will walk <b>YOU</b> through step by step
            </h3>

            <h4 className="third__text">
              How to start a business and scale to your first <br />
              <b>$100,000...</b>
            </h4>
          </div>
          <div className="hero__video__context">
            <div className="hero__video">
              <video src={Video} controls autoPlay muted>
                Your Browser Dosen't Support Videos!
              </video>
            </div>
            <div className="video__button">
              <button>I Want To Be Rich</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
