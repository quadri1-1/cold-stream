import React from "react";
import Details2photo from "./Details2photo";
import { Link } from "react-router-dom";

const Details2 = () => {
  return (
    <div>
      <div>
        <hr />
        <p className="lol">
          Address <span> 1801 E Cedar st. Allentown, Pennsylvania 18109</span>
        </p>
        <hr />
        <p className="lol">
          Bedrooms <span>3</span>
        </p>
        <hr />
        <p className="lol">
          Property Price <span>$240,000.00</span>
        </p>
        <hr />
        <p className="lol">
          Property Description{" "}
          <span>
            <p>•Three Bedroom house end of row/ Half detached</p>
            <p>•one is 3 bedroom rented at $1195/ month</p>
            <p>•Finished Basement</p>
            <p>•Gas Utilities</p>
            <p>•Central AC</p>
            <p>•2 Car detached garage</p>
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
            <Details2photo />
          </section>
        </p>
        <div id="tap-wee">
          <Link to="/sales-application" id="tack">
            <button className="download">Fill Out Application Today</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details2;
