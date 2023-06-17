import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Slideshow.css';
class Slideshow extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slide">
        <div class='container' >
          <div className="row title" style={{ marginBottom: "20px" }} >
          </div>
        </div>
        <Slider {...settings} >
          <div className="wdt">
            <a href = "#"><img className="img" src={'assets/w5.png'} /></a>
          </div>
          <div className="wdt">
            <a href = "#"><img className="img" src={'assets/w4.png'} /></a>
          </div>
          <div className="wdt">
            <a href = "#"><img className="img" src={'assets/w3.png'} /></a>
          </div>
          <div className="wdt">
            <a href = "#"><img className="img" src={'assets/w2.png'} /></a>
          </div >
          <div className="wdt">
            <a href = "#"><img className="img" src={'assets/w41.png'} /></a>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Slideshow