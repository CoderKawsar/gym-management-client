import React from "react";
import "./BmiSection.css";

const BmiSection = () => {
  return (
    <div id="BMI" className="my-5">
      <h2 className="text-center fs-1 mb-3">What is BMI</h2>
      <p className="bmi-text w-50 mx-auto">
        Body Mass Index(BMI) is a person's weight in kilograms divided by the
        square of height in meters. BMI is an inexpensive and easy screening
        method for weight category - underweight, healthy, overweight and
        obesity.
      </p>
      <table className="table table-striped mt-4 w-50 mx-auto">
        <thead>
          <tr>
            <th scope="col">BMI</th>
            <th scope="col">Weight Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Below 18.5</td>
            <td>Underweight</td>
          </tr>
          <tr>
            <td>18.5-24.9</td>
            <td>Healthy</td>
          </tr>
          <tr>
            <td>25.0-29.9</td>
            <td>Overweight</td>
          </tr>
          <tr>
            <td>Above 30.0</td>
            <td>Obesity</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BmiSection;
