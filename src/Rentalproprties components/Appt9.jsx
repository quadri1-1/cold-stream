import React from 'react'
import "../styles/list.css";
import { Link } from "react-router-dom";
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
            <img
              style={{ width: "200px", height: "200px", marginRight: "10px" }}
              src="https://rentchasers.com/wp-content/uploads/2024/08/image000000002-768x1024.jpg"
              alt=""
            />
          </span>
        </p>
        <hr />
        <p className="lol">
          Address <span> 	213 E Bertch st Apt 2 Lansford, Pennsylvania 18232</span>
        </p>
        <hr />
        <p className="lol">
          Bedrooms <span>1</span>
        </p>
        <hr />
        <p className="lol">
          Rent <span>$750.00</span>
        </p>
        <hr />
        <p className="lol">
          Property Description{" "}
          <span>
            <p>•2nd floor 1 Bedroom</p>
            <p>•electric utilities</p>
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
