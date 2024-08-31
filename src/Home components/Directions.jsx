import React from "react";
import { Link } from "react-router-dom";
import "../styles/direction.css";
const Directions = () => {
  return (
    <div className="dog">
      <div className="direct container">
        <div className="property ">
          <h5>COLD STREAM FARM PROPERTY MANAGEMENNT</h5>
          <h5>ELLICOTT CITY DIVISION LLC</h5>
          <p>780 Hallow RD Ellicott City, Md 21043 </p>
          <p>Phone: (610)432-1553</p>
          <p>Fax(800)977-4104</p>
          <p>Email:coldfarm.stream@gmail.com</p>
          <p>Broker of Records </p>
        </div>
        <div >
          <iframe
          className="map"
            width="720"
            height="400"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=720&amp;height=400&amp;hl=en&amp;q=%20%20780%20HOLLOW%20RD%20ELLICOTT%20CITY,%20MD%2021043%20%20+(My%20%20Cold%20Stream%20Farm%20Property%20ManagementBusiness%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps tracker sport</a>
          </iframe>
        </div>
      </div>
      <div id="tions">
        <h6>Tenants</h6>
        <div className="tion">
          <Link id="tion">Repair Request</Link>
          <Link  id="tion" to="/utility">Utility Contact</Link>
          <Link id="tion" to="/online">Online Payment</Link>
        </div>
      </div>
      <div style={{width: "100%"}}>
        <hr />
        <p className="tions">Copyright 2024 ©️ Cold Stream Farm LLC - Ellicott city division </p>
      </div>
    </div>
  );
};

export default Directions;
