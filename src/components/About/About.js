import React from "react";
import "./About.css";
import myImg from "../../images/Kawsar.png";

const About = () => {
  return (
    <div className="about-page">
      <h2 className="text-center fs-1 mt-5">Kawsar Ahmed</h2>
      <h4 className="text-center">(Web Developer)</h4>
      <div className="text-center">
        <img src={myImg} alt="" />
        <p className="p-4">
          This year is the year of becoming who really I am. It's time to do
          what really matters and do the right things for better future. Let's
          unleash the beast within. My mission in this year is to be a junior
          web developer. I am gonna to finish Programming Hero web developer
          course, then take part in SCIC, ACC. I am gonna get a job through
          programming hero. I am gonna be a good web developer who can solve any
          problem and can play along with any web technology. I am gonna explore
          all aspects of web technology gradually.
        </p>
      </div>
      <p></p>
    </div>
  );
};

export default About;
