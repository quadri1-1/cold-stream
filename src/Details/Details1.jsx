import React from "react";
import Details1photo from "./Details1photo";
import { Link } from "react-router-dom";

const Details1 = () => {
  return (
    <div>
      <div>
        <hr />
        <p className="lol">
          Address <span> 122 Market st. Bangor, Pennsylvania 18013</span>
        </p>
        <hr />
        <p className="lol">
          Bedrooms <span>8</span>
        </p>
        <hr />
        <p className="lol">
          Property Price <span>$449,000.00</span>
        </p>
        <hr />
        <p className="lol">
          Property Description{" "}
          <span>
            <p>•2 Half twin Houses (both halves of the property)</p>
            <p>•one is 3 bedroom rented at $1195/ month</p>
            <p>•5 bedroom is listed for rent $1995/ month</p>
          </span>
        </p>
        <p className="lol">
          Commission%
          <span>3.00</span>
        </p>
        <hr />
        <p
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
          className="mag"
        >
          {" "}
          Image Gallary
          <section>
            <Details1photo />
          </section>
        </p>
        <div id="tap-wee">
          <Link to="pre-screen-rental-application" id="tack">
            <button className="download">Fill Out Application Today</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details1;
