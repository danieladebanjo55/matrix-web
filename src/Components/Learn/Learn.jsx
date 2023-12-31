import React from "react";
import "./Learn.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import Card from "./Cards/Card";

import myVideo from "./business-fundamentals.mp4";
import myVideo1 from "./select-your-wining-product.mp4";
import myVideo2 from "./creating-your-grand-slam-offer.mp4";
import myVideo3 from "./scale-for-profit.mp4";

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
          <div className="main__card__container">
            <div className="card__container">
              <div
                className="card1"
                data-aos="fade-up"
                data-aos-easing="ease-in"
                data-aos-duration="1000"
              >
                <Card
                  Heading={"Business Fundamentals"}
                  Content={
                    "Become an expert in the field of business fundamentals by learning how money works, developing the millionaire infrastructure, and how to utilise elite level business operations to optimise your growth. "
                  }
                  Video={myVideo}
                />
                <Card
                  Heading={"Select A Winning Product"}
                  Content={
                    "Unlock the secrets to identifying and selecting  your winning product that will drive your business to success. We will teach you the skills needed to make informed decisions and maximize your chances of launching a product that resonates with your target audience."
                  }
                  Video={myVideo1}
                />
              </div>
              <div
                className="card1"
                data-aos="fade-up"
                data-aos-easing="ease"
                data-aos-duration="1300"
              >
                <Card
                  Heading={"Create A Grand Slam Offer"}
                  Content={
                    "I will teach you how to craft an irresistible grand slam offer. Learn to identify customer needs, perfect pricing strategies, and create compelling sales pitches for unmatched business success."
                  }
                  Video={myVideo2}
                />
                <Card
                  Heading={"Scale For Profit"}
                  Content={
                    "Master the strategies and tactics to efficiently grow your business, increase profitability, and achieve long-term success in a competitive marketplace. "
                  }
                  Video={myVideo3}
                />
              </div>
              {/* <Card Heading={""} Content={""} Video={myVideo} /> */}
            </div>
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

export default Learn;
