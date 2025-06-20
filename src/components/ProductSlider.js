import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
//import img from '../assets/images/81zY7X7uIAL.jpg'
import img from "../assets/images/watch.jpg";
import and from "../assets/images/Android-TV.jpg";

import ele from "../assets/images/electronics.png";

const ProductSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive} className="slider-container">
        <div className="item">
          <img src={img} alt=" 1" />
          <p>Beauty</p>
        </div>
        <div className="item">
          <img src={and} alt=" 2" />
          <p>Beauty</p>
        </div>
        <div className="item">
          <img src={ele} alt=" 3" />
          <p>Beauty</p>
        </div>
         <div className="item">
          <img src={img} alt=" 1" />
          <p>Beauty</p>
        </div>
        <div className="item">
          <img src={and} alt=" 2" />
          <p>Beauty</p>
        </div>
        <div className="item">
          <img src={ele} alt=" 3" />
          <p>Beauty</p>
        </div>
         <div className="item">
          <img src={img} alt=" 1" />
          <p>Beauty</p>
        </div>
        <div className="item">
          <img src={and} alt=" 2" />
          <p>Beauty</p>
        </div>
        <div className="item">
          <img src={ele} alt=" 3" />
          <p>Beauty</p>
        </div>
      </Carousel>
    </div>
  );
};

export default ProductSlider;
