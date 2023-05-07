import React from "react";
import "./Hero.css";
import "./heroleft.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";

export default function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="padding hero-container">
        <div className="hero-left">
          <div className="hero-title">
            <h1>
              <div className="Orange" />
              Discover <br />
              Most Suitable <br />
              Prperties
            </h1>
          </div>
          <div className="hero-des">
            <span>Find the varities of Properties Hear.</span>

            <span>
              Forget all diffculities
              <br /> in finding a residence for you
            </span>
          </div>

          <div className="Search-bar">
            <HiLocationMarker style={{ color: "blue" }} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="StatusBar">
        <div className="status">
          <span className="count"><CountUp start={3000} end={4000} duration={5}></CountUp>
          </span><span className="plus">+</span><br />
          <span>Premium Products</span>
        </div>
        <div className="status">
          <span className="count"><CountUp start={1000} end={5000} duration={7}></CountUp>
          </span><span className="plus">+</span><br />
          <span>Happy Custmor</span>
        </div>
        <div className="status">
          <span className="count"><CountUp start={1} end={10} duration={6}></CountUp>
          </span><span className="plus">+</span><br />
          <span>Award Winning</span>
        </div>
        </div>
        </div>

        <div className="hero-right">
          <div className="image-container">
            <img
              src="https://empire-s3-production.bobvila.com/articles/wp-content/uploads/2021/09/Should-You-Paint-Your-House-Black_1.jpg"
              alt="Building"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
