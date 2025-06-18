import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';
const images = [
  { url: 'http://dummyimage.com/158x100.png/cc0000/ffffff', caption: 'Welcome to Our Site' },
  { url: 'http://dummyimage.com/128x100.png/5fa2dd/ffffff', caption: 'Explore Our Services' },
  { url: 'http://dummyimage.com/158x100.png/cc0000/ffffff', caption: 'Join Us Today' }
];

const Herobanner = () => {

    const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true
  };
  return (
    <div className="hero-banner">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="banner-slide">
            <img src={item.url} alt={`Slide ${index + 1}`} className="banner-img" />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Herobanner
