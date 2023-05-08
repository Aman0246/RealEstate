import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Swipe.css";
import data from "../../json/Slider.json";
import { useRef, useState } from "react";

import "swiper/css/pagination";

import { Pagination } from "swiper";

export default function Swipe() {
  return (
    <>
      <section className="r wrapper">
        <div className="r-container">
          <div className="head">
            <span className="s1">Best Choices</span>
            <br />
            <span className="s2">Popular Residents</span>
          </div>
        </div>
        <div className="holder">
          <Swiper
            slidesPerView={3}
            spaceBetween={50}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {data.map((e, i) => (
              <span key={i}>
                <SwiperSlide>
                  <div className="card-wrapper">
                    <div className="card-model">
                      <img src={e.image} alt="" srcset="" />
                    <div className="discription">
                    <span className="s1">$</span> <span className="s1">{e.price}</span>
                    </div>
                    <div className="details">
                      <div className="Details">Details</div>
                    <div className="details">{e.detail}</div>
                    </div>
                  </div>
                    </div>
                </SwiperSlide>
              </span>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
