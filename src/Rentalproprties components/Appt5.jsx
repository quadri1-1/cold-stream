import React from "react";
import "../styles/list.css";
import { Link } from "react-router-dom";
const Appt5 = () => {
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
              src="https://rentchasers.com/wp-content/uploads/2024/07/20240701_133656-768x1024.jpg"
              alt=""
            />
          </span>
        </p>
        <hr />
        <p className="lol">
          Address{" "}
          <span>
            {" "}
            Offices Available for rent 1242-1244 W Hamilton st Allentown,
            Pennsylvania 18102
          </span>
        </p>
        <hr />
        <p className="lol">
          Bedrooms <span>1</span>
        </p>
        <hr />
        <p className="lol">
          Rent <span>$750</span>
        </p>
        <hr />
        <p className="lol">
          Property Description{" "}
          <span>
            <p>•Multiple Office Spaces available</p>
            <p>•rent starting $700 / Month</p> <p>•Utilities include</p>{" "}
            <p>•Off street Parking</p>{" "}
          </span>
        </p>
        <hr />
        <Link className="det">View Details</Link>
      </div>
    </div>
  );
};

export default Appt5;
