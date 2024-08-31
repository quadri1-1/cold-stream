import React from 'react'
import "../styles/list.css";
import { Link } from "react-router-dom";
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
            {" "}
            <img
              style={{ width: "200px", height: "200px", marginRight: "10px" }}
              src="https://rentchasers.com/wp-content/uploads/2024/07/GetMedia-11.jpg"
              alt=""
            />
          </span>
        </p>
        <hr />
        <p className="lol">
          Address{" "}
          <span> 2149 W Allen st. Allentown Allentown, Pennsylvania 18104</span>
        </p>
        <hr />
        <p className="lol">
          Bedrooms <span>3</span>
        </p>
        <hr />
        <p className="lol">
          Rent <span>$2,150.00</span>
        </p>
        <hr />
        <p className="lol">
          Property Description{" "}
          <span>
            <p>•Central AC</p>
            <p>•detached Garage</p> 
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