import React from "react";
import "./Services.css";
import serviceImg1 from "../../images/serviceImage/service1.jpg";
import serviceImg2 from "../../images/serviceImage/service2.jpg";
import serviceImg3 from "../../images/serviceImage/service3.jpg";
import Service from "../Service/Service";

const Services = () => {
  const servicesArr = [
    {
      id: 1,
      name: "Personal Training",
      img: serviceImg1,
      price: 289,
      desc: "I'll provide best personal training service available.",
    },
    {
      id: 2,
      name: "Nutrition Coaching",
      img: serviceImg2,
      price: 189,
      desc: "I'll provide best nutrition coaching(diet plan) for your required fitness level.",
    },
    {
      id: 3,
      name: "Active Rehabilitation",
      img: serviceImg3,
      price: 289,
      desc: "I'll provide best active rehabilitation service to regain yourself that you lost.",
    },
  ];
  return (
    <div id="services">
      <h2 className="text-center mt-5 mb-3 fs-1">Services</h2>
      <div className="services">
        {servicesArr.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
