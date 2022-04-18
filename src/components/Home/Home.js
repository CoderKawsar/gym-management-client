import React from "react";
import BmiSection from "../BmiSection/BmiSection";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <Slider />
      <div className="container">
        <Services />
        <BmiSection />
      </div>
    </div>
  );
};

export default Home;
