import React from "react";
import "./style.css";
// import { StarOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const File1 = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div className="main">
        <div className="section1">
          <div>
            <h1>Lorem Ipsum is simply dummy text</h1>
            <p>
              {" "}
              of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s,
            </p>
          </div>
          <div>
            <h2>Lorem Ipsum</h2>
            <div style={{ display: "flex" }}>
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>*</span>
              <span>*</span>
            </div>
            <p style={{ margin: "0" }}>dummy text ever</p>
            <h3>
              <span>*</span> Typesettin
            </h3>
          </div>
        </div>
        <div className="section2">
          <SlideV />
        </div>
      </div>
    </div>
  );
};

const SlideV = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const Cards = (
    <div className="card">
      <h3>Lorem Ipsum is simply dummy text</h3>
      <p>
        {" "}
        of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s,
      </p>
      <div style={{ display: "flex" }}>
        <span>*</span>
        <span>*</span>
        <span>*</span>
        <span>*</span>
        <span>*</span>
      </div>
      <p>dummy text ever</p>
    </div>
  );
  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings}>
        <div>{Cards}</div>
        <div>{Cards}</div>
        <div>{Cards}</div>
        <div>{Cards}</div>
        <div>{Cards}</div>
      </Slider>
    </div>
  );
};

export default File1;
