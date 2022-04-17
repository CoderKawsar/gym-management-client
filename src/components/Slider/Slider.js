import React from "react";
import "./Slider.css";
import { Carousel } from "react-bootstrap";
import sliderImage1 from "../../images/bannerImage/banner1.jpg";
import sliderImage2 from "../../images/bannerImage/banner4.jpg";
import sliderImage3 from "../../images/bannerImage/banner3.jpg";

const Slider = () => {
  return (
    <Carousel className="slider">
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImage1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImage2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImage3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
