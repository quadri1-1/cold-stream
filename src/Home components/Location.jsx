import React from "react";
import "../styles/location.css";
import { Link } from "react-router-dom";
const Location = () => {
  return (
    <div className="container">
      <div className="location">
        <h1>NOW AT ELLICOTT CITY!</h1>
        <div className="props"></div>
        <h3>Reach Out To Us Today!</h3>
        <h4>REVIEW OUR PROPERTY MANAGEMENT OPTIONS AVAILABLE</h4>
        <p>
          We'll help you find the right fit for your property:{" "}
          <Link className="link">(610) 432-1553</Link>
        </p>
        <Link className="link" to="/contact">
          <button className="tobtn">Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Location;
