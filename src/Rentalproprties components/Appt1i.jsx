import React from "react";
import "../styles/list.css";
import { Link } from "react-router-dom";
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
            {" "}
            <img
              style={{ width: "200px", height: "200px", marginRight: "10px" }}
              src="https://rentchasers.com/wp-content/uploads/2024/07/20240722_111837-768x1024.jpg"
              alt=""
            />
          </span>
        </p>
        <hr />
        <p className="lol">
          Address <span> 502 N 8th st Apt 1FAllentown, Pennsylvania 18102</span>
          <Link>Map it</Link>
        </p>
        <hr />
        <p className="lol">
          Bedrooms <span>2</span>
        </p>
        <hr />
        <p className="lol">
          Rent <span>$1,350.00</span>
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
        <Link>View Details</Link>
      </div>
    </div>
  );
};

export default Appt1i;
