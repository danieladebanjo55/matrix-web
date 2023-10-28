import React from "react";
import "./Offer.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import myVideo from "./online-store.mp4";
import myVideo1 from "./appointment-setting.mp4";
import Card from "./Cards/Card";

AOS.init();
function Offer() {
  return (
    <>
      <div className="main__learn__container offer">
        <div className="learn__container">
          <div className="learn__title">
            <h2>What We Also Have To Offer</h2>
          </div>
          <div className="main__card__container">
            <div className="card__container">
              <div className="card1">
                <Card
                  Heading={"Shop Our Products"}
                  Content={
                    "We offer countless solutions to your businesses issues for very cheap price on our Shopify store. All e-commerce products so you don’t need to worry about shipping delays. You get them as soon as you purchase! This is the last piece in the puzzle you need to achieve your dream life… so what’s stopping you?"
                  }
                  Video={myVideo}
                  Link="https://upward-growthstore.com/"
                />
                <Card
                  Heading={"Learn A High Income Skill"}
                  Content={
                    "Learn the high income skill of appointment setting where you will see yourself travel from a beginner with $0 to an elite level appointment setter making $5k+ per month. All of this with JUST your phone. We’ve helped countless students achieve this life, so let us help you quit your 9-5 and Escape the Rat Race."
                  }
                  Video={myVideo1}
                  Link="https://upward-growth.com/appointmentsetting"
                />
              </div>
              {/* <Card Heading={""} Content={""} Video={myVideo} /> */}
            </div>
          </div>
          <div className="semi__learn__title">
            <h2>Your Chance To Live Your Dream Life Is One Click Away</h2>
          </div>
          <div className="learn__button">
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
    </>
  );
}

export default Offer;
