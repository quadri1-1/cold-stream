import React from "react";
import "../styles/list.css";
import { Link } from "react-router-dom";
import Appt5slider from "../imageslider/Appt5slider";
const Appt5 = () => {
  return (
    <div>
      <div>
        <hr />
        <p className="lol">
          Type of Property <span>Apartment</span>
        </p>
        <hr />
        <p className="lol">
          {" "}
          Property image
          <span>
           <Appt5slider/>
          </span>
        </p>
        <hr />
        <p className="lol">
          Address{" "}
          <span>
            {" "}
            8120 Randolph Way, Ellicott City, MD 21043
          </span>
        </p>
        <hr />
        <p className="lol">
          Bedrooms <span>2</span>
        </p>
        <hr />
        <p className="lol">
          Rent <span>$2,330/mo</span>
        </p>
        <hr />
        <p className="lol">
          Property Description{" "}
          <span>
            <p>•Air conditioning</p>
            <p>•Ceiling fan</p>
            <p>•Pet Friendly</p>{" "}
            <p>•Patio or Balcony</p>{" "}
            <p>Close To Boutique Shops And Area Malls</p>
            <p>Stylish Window Covering</p>
            <p>Short Term Lease</p>
          </span>
        </p>
        <hr />
         <div id="tap-wee">
          <Link to="/pre-screen-rental-application" id="tack" >Fill Out Application Today</Link>
        </div>
      </div>
    </div>
  );
};

export default Appt5;
