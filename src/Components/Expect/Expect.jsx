import React from "react";
import "./Expect.scss";

import Image from "./expect-image.jpg";

function Expect() {
  return (
    <>
      <div className="main__expect__container">
        <div className="expect__container">
          <div className="expect__left">
            <img src={Image} alt="expect-image" />
          </div>
          <div className="expect__right">
            <div className="right__title">
              <h2>What You Could Expect</h2>
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
    </>
  );
}

export default Expect;
