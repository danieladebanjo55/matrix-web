import React from "react";
import "./Navbar.scss";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "./logo-copy.png";

function Navbar() {
  return (
    <>
      <div className="main__nav__container">
        <div className="content__container">
          <div className="shop__button">
            <a href="https://upward-growthstore.com/" target="_blank">
              <button>SHOP</button>
            </a>
          </div>
          <div className="logo__hero">
            <img src={Image} alt="hero-logo" />
          </div>
          <div className="signup__button">
            <a href="https://upward-growth.com/ratrace" target="_blank">
              <button>START NOW</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
