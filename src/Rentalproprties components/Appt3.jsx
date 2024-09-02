import React from "react";
import "../styles/list.css";
import { Link } from "react-router-dom";
import Appt31slider from "../imageslider/Appt31slider";
const Appt3 = () => {
  return (
    <div>
      <div>
        <hr />
        <p className="lol">
          Type of Property <span>House</span>
        </p>
        <hr />
        <p className="lol">
          {" "}
          Property image
          <span>
            <Appt31slider/>
          </span>
        </p>
        <hr />
        <p className="lol">
          Address:
          <span>
            {" "}
            4765 Hallowed Strm, Ellicott City, MD 21042
          </span>
        </p>
        <hr />
        <p className="lol">
          Bedrooms: <span>3</span>
        </p>
        <hr />
        <p className="lol">
          Rent: <span>$2,800/mo</span>
        </p>
        <hr />
        <p className="lol">
          Property Description{" "}
          <span>
            <p>•Bedrooms: 3</p>
            <p>•Bathrooms: 2</p>
            <p>Full bathrooms: 2</p>
            <p>Included: Dishwasher, Dryer, Refrigerator, Washer</p>
            <p>Laundry: In Unit</p>
            <p>Has attached garage: Yes</p>
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

export default Appt3;
