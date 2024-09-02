import React from 'react'
import "../styles/list.css";
import { Link } from "react-router-dom";
import Appt4slider from '../imageslider/Appt4slider';
const Appt4 = () => {
  return (
    <div><div>
        <hr />
        <p className="lol">
          Type of Property <span>House</span>
        </p>
        <hr />
        <p className="lol">
          {" "}
          Property image
          <span>
            <Appt4slider/>
          </span>
        </p>
        <hr />
        <p className="lol">
          Address{" "}
          <span> 7831 Old Litchfield Ln, Ellicott City, MD 21043</span>
        </p>
        <hr />
        <p className="lol">
          Bedrooms <span>4</span>
        </p>
        <hr />
        <p className="lol">
          Rent <span>$2,995/mo</span>
        </p>
        <hr />
        <p className="lol">
          Property Description{" "}
          <span>
            <p>•Bedrooms: 4</p>
          <p>•Bathrooms: 3</p> 
          <p>•Total interior livable area: 1,440 sqft</p>
          </span>
        </p>
        <hr />
         <div id="tap-wee">
          <Link to="/pre-screen-rental-application" id="tack" >Fill Out Application Today</Link>
        </div>
      </div></div>
  )
}

export default Appt4