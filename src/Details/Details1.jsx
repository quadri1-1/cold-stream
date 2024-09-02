import React from "react";
import Details1photo from "./Details1photo";
import { Link } from "react-router-dom";

const Details1 = () => {
  return (
    <div>
      <div>
        <hr />
        <p className="lol">
          Address <span> 5208 Font Ave, Ellicott City, MD 21043</span>
        </p>
        <hr />
        <p className="lol">
          Bedrooms <span>4</span>
        </p>
        <hr />
        <p className="lol">
          Property Price <span>$630,000.00</span>
        </p>
        <hr />
        <p className="lol">
          Property Description{" "}
          <span>
            <p>•Bedrooms: 4</p>
            <p>•Bathrooms: 3</p>
            <p>•Included: Cooktop, Dishwasher, Dryer, Microwave, Oven - Wall, Refrigerator, Washer, Oven/Range - Electric, Electric Water Heater</p>
            <p>•Laundry: Lower Level, Laundry Room</p>
            <p>•Room types: Living Room, Dining Room, Kitchen, Family Room, Recreation Room, Storage Room, Utility Room</p>
            <p>•Heating: Forced Air, Heat Pump, Electric</p>
            <p>•Number of fireplaces: 1</p>
            <p>•Total spaces: 20</p>
            <p>•Uncovered spaces: 20</p>
            <p>•Parking features: Asphalt Driveway, Driveway, Off Street</p>
            <p>•Size: 0.72 Acres</p>
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
          <Link to="/sales-application" id="tack">
            <button className="download">Fill Out Application Today</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details1;
