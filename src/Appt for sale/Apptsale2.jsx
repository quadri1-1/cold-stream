import React from 'react'
import { Link } from 'react-router-dom'

const Apptsale2 = () => {
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
              src="https://photos.zillowstatic.com/fp/b915d5443676ca734b668c9ab5c1f140-cc_ft_768.webp"
              alt=""
            />
          </span>
        </p>
        <hr />
        <p className="lol">
          Address{" "}
          <span>
            9516 Michaels Way, Ellicott City, MD 21042
          </span>
        </p>
        <hr />
        <p className="lol">
          Bedrooms <span>4</span>
        </p>
        <hr />
        <p className="lol">
          Property Price <span>$675,000.00</span>
        </p>
        <hr />
        <p className="lol">
          Property Description{" "}
          <span>
            <p>•Bedrooms: 4</p>
            <p>•Bathrooms: 3</p>
            <p>•Included: Built-In Microwave, Self Cleaning Oven, Washer, Water Heater, Dishwasher, Disposal, Dryer, Ice Maker, Refrigerator, Stove, Gas Water Heater</p>
            <p>•Laundry: Main Level</p>
            <p>•Room types: Living Room, Dining Room, Primary Bedroom, Bedroom 2, Bedroom 3, Bedroom 4, Kitchen, Family Room</p>
            <p>Total interior livable area: 2,309 sqft</p>
            <p>•2 Car detached garage</p>
            <p>•Heating: Forced Air, Natural Gas</p>
            <p>Size: 0.55 Acres</p>
            <p>Zoning: R20</p>
          </span>
              </p>
              <p className='lol'>
                  Commission%
                  <span>3.00</span>
            </p>
        <hr />
        <div id="tap-wee">
          <Link to="/detail2" id="tack" >View Details</Link>
        </div>
      </div>
    </div>
  )
}

export default Apptsale2