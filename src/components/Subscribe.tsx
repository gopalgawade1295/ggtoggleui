import React from "react";
import arrow from "../assets/images/Polygon 1.png";
import image from "../assets/images/Mask Group 72.png";
import "../assets/styles/subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe-box">
        <div className="subscribe-info">
          <h1>Subscribe</h1>

          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>

          <input type="email" placeholder="Enter your Email Address" />
        </div>

        <button className="carousel-btn">
          <span>Subscribe Now</span>

          <img src={arrow} alt="" />
        </button>
      </div>

      <div>
        <img src={image} alt="" className="subscribe-img" />
      </div>
    </div>
  );
};

export default Subscribe;
