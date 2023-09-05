import React from "react";
import "./Offer.scss";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function Offer() {
  return (
    <>
      <div
        className="main__learn__container offer"
        data-aos="zoom-in"
        data-aos-easing="ease-in"
        data-aos-duration="1000"
      >
        <div className="learn__container">
          <div className="learn__title">
            <h2>What We Also Have To Offer</h2>
          </div>
          <div className="split__text">
            <div className="left__text">
              <h2>Shopify Store</h2>
            </div>
            <div className="right__text">
              <h2>Appointment Setting Program</h2>
            </div>
          </div>
          <div className="text__context">
            <h3>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
              magnam debitis ad culpa laudantium quaerat deleniti, iure ipsam
              illo harum, corporis, sequi tempora in iste!
            </h3>
          </div>
          <div className="semi__learn__title">
            <h2>Your Chance To Live Your Dream Life Is One Click Away</h2>
          </div>
          <div className="learn__button">
            <button>SIGN UP</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Offer;
