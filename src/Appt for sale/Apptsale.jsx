import React from 'react'
import { Link } from 'react-router-dom'

const Apptsale = () => {
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
              src="https://photos.zillowstatic.com/fp/2698c6e66ff963983fb9d808f1f4bc57-cc_ft_768.webp"
              alt=""
            />
          </span>
        </p>
        <hr />
        <p className="lol">
          Address{" "}
          <span>
            5208 Font Ave, Ellicott City, MD 21043
          </span>
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
              <p className='lol'>
                  Commission%
                  <span>3.00</span>
            </p>
        <hr />
        <div id="tap-wee">
          <Link to="/detail" id="tack" >View Details</Link>
        </div>
      </div>
    </div>
  )
}

export default Apptsale