import React from "react";
import "../styles/list.css";
import { Link } from "react-router-dom";
const Appt3 = () => {
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
            <img
              style={{ width: "200px", height: "200px", marginRight: "10px" }}
              src="https://rentchasers.com/wp-content/uploads/2024/07/20240723_094247-768x1024.jpg"
              alt=""
            />
          </span>
        </p>
        <hr />
        <p className="lol">
          Address{" "}
          <span>
            {" "}
            Garages available for rent Allentown Allentown, Pennsylvania 18102
          </span>
        </p>
        <hr />
        <p className="lol">
          Bedrooms <span>2</span>
        </p>
        <hr />
        <p className="lol">
          Rent <span>$165.00</span>
        </p>
        <hr />
        <p className="lol">
          Property Description{" "}
          <span>
            <p>•First Floor</p>
            <p>•Gas Heated</p>
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
