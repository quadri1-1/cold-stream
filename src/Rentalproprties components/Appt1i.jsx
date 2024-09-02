import React from "react";
import "../styles/list.css";
import { Link } from "react-router-dom";
import Appt1islider from "../imageslider/Appt1islider";
const Appt1i = () => {
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
           <Appt1islider/>
          </span>
        </p>
        <hr />
        <p className="lol">
          Address:
          <span>
            {" "}
            6081 Otterbein Ln, Ellicott City, MD 21043
          </span>
        </p>
        <hr />
        <p className="lol">
          Bedrooms: <span>  2</span>
        </p>
        <hr />
        <p className="lol">
          Rent: <span>  $2,940+</span>
        </p>
        <hr />
        <p className="lol">
          Property Description{" "}
          <span>
            <p>•Storage spacer</p>
            <p>•Pet park</p>
            <p>•Package service</p>
            <p>•Onsite managemen</p>
            <p>•Elevator</p>
            <p>•Detached garage</p>
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

export default Appt1i;
