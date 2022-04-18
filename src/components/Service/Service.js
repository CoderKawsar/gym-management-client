import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, img, price, desc } = service;
  return (
    <div className="service p-3 shadow-lg rounded">
      <img src={img} alt="" />
      <h4 className="service-name">{name}</h4>
      <p className="service-desc">{desc}</p>
      <p className="service-price">Package: ${price}/month</p>
      <Link to="/checkout">
        <button className="btn btn-primary text-white">Checkout</button>
      </Link>
    </div>
  );
};

export default Service;
