import React from "react";
import "./Expect.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

import Image from "./expect-image.jpg";

function Expect() {
  useEffect(() => {
    const handleScroll = () => {
      const horizontalLine = document.querySelector(".horizontal__line2");
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
      <div className="main__expect__container">
        <div className="expect__container">
          <div
            className="expect__left"
            data-aos="slide-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
          >
            <img src={Image} alt="expect-image" />
          </div>
          <div
            className="expect__right"
            data-aos="slide-up"
            data-aos-easing="ease"
            data-aos-duration="1000"
          >
            <div className="right__title">
              <h2>
                <b>What You Could Expect</b>
              </h2>
            </div>
            <div className="right__list">
              <ul className="my__list">
                <li>Elite Level Content From Successful Entrepreneurs</li>
                <li>
                  Scale from <b>Zero to $10k/month</b> as fast as possible
                </li>
                <li>
                  Master the skills you need to <b>maximize your income</b>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container__line"></div>
    </>
  );
}

export default Expect;
