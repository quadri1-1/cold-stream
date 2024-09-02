import React from "react";
import "../styles/list.css";
import { Link } from "react-router-dom";
const Appt12i = () => {
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
            {" "}
            <img
              style={{ width: "200px", height: "200px", marginRight: "10px" }}
              src="https://rentchasers.com/wp-content/uploads/2024/07/20240708_105604-768x1024.jpg"
              alt=""
            />
          </span>
        </p>
        <hr />
        <p className="lol">
          Address <span> 3110 Batavia Ave, Baltimore, MD 21214</span>
        </p>
        <hr />
        <p className="lol">
          Bedrooms <span>5</span>
        </p>
        <hr />
        <p className="lol">
          Rent <span>$3,200/mo</span>
        </p>
        <hr />
        <p className="lol">
          Property Description{" "}
          <span>
            <p>•Bedrooms: 5</p>
            <p>•Bathrooms: 2</p>
            <p>•Included: Dishwasher, Dryer, Refrigerator, Washer</p>
            <p>•Central Air</p>
            <p>•Laundry: In Unit</p>
            <p>Has basement: Yes</p>
            <p>Total interior livable area: 1,944 sqft</p>
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

export default Appt12i;
