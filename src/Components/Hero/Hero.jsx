import React from "react";
import { useEffect } from "react";
import "./Hero.scss";

import AOS from "aos";
import "aos/dist/aos.css";
import Video from "./hero-video1.mp4";
import Line from "./Line/Line";

AOS.init();

function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const horizontalLine = document.querySelector(".horizontal__line");
      if (horizontalLine) {
        const scrollPercentage =
          (window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
          200;
        horizontalLine.style.width = `${scrollPercentage}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="hero__main__container">
        <div className="hero__content__container">
          <div
            className="word__hero"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
          >
            <h2 className="first__text">
              Trapped In The<span className="rat__race">&nbsp;Rat Race</span>?
            </h2>

            <h3 className="second__text">
              I will <b>teach you&nbsp;</b>how to<b>&nbsp;escape.</b>
            </h3>

            {/* <h4 className="third__text">
              How to start a business and scale to your first <br />
              <b>$100,000...</b>
            </h4> */}
          </div>
          <div className="hero__video__context">
            <div className="hero__video">
              <video src={Video} controls autoPlay muted>
                Your Browser Dosen't Support Videos!
              </video>
            </div>
            <div className="video__button">
              <a
                href="https://upwardgrowth-course.teachable.com/purchase?product_id=5009665"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="big-button">Secure Your Spot</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
