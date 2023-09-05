import React from "react";
import "./Learn.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Learn() {
  return (
    <>
      <div className="main__learn__container">
        <div className="learn__container">
          <div
            className="learn__title"
            data-aos="fade-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
          >
            <h2>What You Will Learn</h2>
          </div>
          <div className="split__text">
            <div
              className="left__text"
              data-aos="slide-right"
              data-aos-easing="ease"
              data-aos-duration="1000"
            >
              <h2>How To Start A Business From Scratch</h2>
            </div>
            <div
              className="right__text"
              data-aos="slide-left"
              data-aos-easing="ease"
              data-aos-duration="1000"
            >
              <h2>Scale To Your First $100,000</h2>
            </div>
          </div>
          <div
            className="text__context"
            data-aos="zoom-in"
            data-aos-easing="ease"
            data-aos-duration="1000"
          >
            <h3>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              magnam debitis ad culpa laudantium quaerat deleniti, iure ipsam
              illo harum, corporis, sequi tempora in iste!
            </h3>
          </div>
          <div className="semi__learn__title">
            <h2>Break The Cycle Of The Poor And Live Your Dream Life...</h2>
          </div>
          <div
            className="learn__button my__learn"
            data-aos="fade-in"
            data-aos-easing="ease"
            data-aos-duration="1000"
          >
            <button>SIGN UP</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Learn;
