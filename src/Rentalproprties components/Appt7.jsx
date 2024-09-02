import React from 'react'
import "../styles/list.css";
import { Link } from "react-router-dom";
import Appt7slider from '../imageslider/Appt7slider';
const Appt7 = () => {
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
            <Appt7slider/>
          </span>
        </p>
        <hr />
        <p className="lol">
          Address <span> 	2273 Ballard Way, Ellicott City, MD 21042</span>
        </p>
        <hr />
        <p className="lol">
          Bedrooms <span>6</span>
        </p>
        <hr />
        <p className="lol">
          Rent <span>$5,865/mo</span>
        </p>
        <hr />
        <p className="lol">
          Property Description{" "}
          <span>
            <p>•Bedrooms: 6</p>
            <p>•Bathrooms: 5</p>
            <p>•Ceiling Fan(s), Walk In Closet</p>
            <p>•Flooring: Hardwood</p>
            <p>•Furnished: Yes</p>
            <p>•Total interior livable area: 5,308 sqft</p>
            <p>•Included: Dishwasher, Dryer, Washer</p>
            <p>•Has attached garage: Yes</p>
            <p>•Spa features: Hottub Spa</p>
            <p>•Exterior features: 2 Ovens, No Utilities included in rent, Walk In Closet</p>
            <p>•Has spa: Yes</p>
          </span>
        </p>
        <hr />
        <div id="tap-wee">
          <Link to="/pre-screen-rental-application" id="tack" >Fill Out Application Today</Link>
        </div>
        
      </div>
    </div>
  )
}

export default Appt7
