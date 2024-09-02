import React from 'react'
import "../styles/list.css";
import Appt6slider from "../imageslider/Aptt6slider"
import { Link } from "react-router-dom";
const Appt6 = () => {
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
            {" "}
            <Appt6slider/>
          </span>
        </p>
        <hr />
        <p className="lol">
          Address <span> 9562 Old Route 108, Ellicott City, MD 21042</span>
        </p>
        <hr />
        <p className="lol">
          Bedrooms <span>3</span>
        </p>
        <hr />
        <p className="lol">
          Rent <span>$3,800 - $3,850 / mo</span>
        </p>
        <hr />
        <p className="lol">
          Property Description{" "}
          <span>
            <p>•Ecobee Thermostats</p>
            <p>•End Unit</p>
            <p>•Garage</p>
            <p>•High-End Finishes</p>
            <p>•Private Balcony</p>
            <p>•Upgraded Luxury Baths</p>
            <p>•Stainless Appliances</p>
            <p>•Large Closets</p>
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

export default Appt6