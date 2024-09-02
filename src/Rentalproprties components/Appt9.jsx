import React from 'react'
import "../styles/list.css";
import { Link } from "react-router-dom";
import Appt9slider from '../imageslider/Appt9slider';
const Appt9 = () => {
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
            <Appt9slider/>
          </span>
        </p>
        <hr />
        <p className="lol">
          Address <span> 	8756 Manahan Dr, Ellicott City, MD 21043</span>
        </p>
        <hr />
        <p className="lol">
          Bedrooms <span>3</span>
        </p>
        <hr />
        <p className="lol">
          Rent <span>$2,700/mo</span>
        </p>
        <hr />
        <p className="lol">
          Property Description{" "}
          <span>
            <p>•Bedrooms: 3</p>
            <p>•Bathrooms: 3</p>
            <p>•Total interior livable area: 1,715 sqft</p>
            <p>•Details: Contact manager</p>
            <p>•Region: Ellicott City</p>
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

export default Appt9
