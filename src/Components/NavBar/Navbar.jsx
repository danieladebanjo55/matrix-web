import React from "react";
import "./Navbar.scss";
import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  return (
    <>
      <div className="main__nav__container">
        <div className="content__container">
          <div className="shop__button">
            <button>SHOP</button>
          </div>
          <div className="signup__button">
            <button>START NOW</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
