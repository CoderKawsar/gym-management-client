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
          <h3>Shape it up, get fit. Don't quit</h3>
          <p>
            Today I'll do what others won't so tomorrow I can accomplish what
            others can't. We are what we repeatedly do. Excellence then is not
            an act but a habit.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImage2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Sore today, strong tomorrow</h3>
          <p>
          What hurts today makes you stronger tomorrow
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={sliderImage3} alt="Third slide" />
        <Carousel.Caption>
          <h3>Look in the mirror. That's your competition</h3>
          <p>
            Some people want it to happen, some wish it would happen, others
            make it happen - Michael Jordan
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
