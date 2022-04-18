import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  return (
    <div className="bg-dark text-white p-3">
      <div className="container">
        <div className="row">
          <div className="col-4 footer-link">
            <a href="home#home" className="d-block my-3">
              Home
            </a>
            <a href="home#services" className="d-block my-3">
              Services
            </a>
            <a href="home#BMI" className="d-block my-3">
              BMI
            </a>
          </div>
          <div className="col-4 position-relative">
            <p className="position-absolute" style={{ bottom: "0px" }}>
              <small>Copyright &copy;{date.getFullYear()}</small>
            </p>
          </div>
          <div className="col-4">
            <h3>Working Hours</h3>
            <div className="my-3">
              <p className="m-1">Monday - Friday:</p>
              <p className="m-1">07.00 - 21.00</p>
            </div>
            <div className="my-3">
              <p className="m-1">Saturday:</p>
              <p className="m-1">07.00 - 16.00</p>
            </div>
            <div className="my-3">
              <p className="m-1">Sunday closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
