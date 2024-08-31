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
              src="https://rentchasers.com/wp-content/uploads/gravity_forms/5-02805bedf342a230bfde6b19d478351e/2024/07/20231211_111401.jpg"
              alt=""
            />
          </span>
        </p>
        <hr />
        <p className="lol">
          Address{" "}
          <span>
            {" "}
            122 Market st. Bangor, Pennsylvania 18013
          </span>
        </p>
        <hr />
        <p className="lol">
          Bedrooms <span>8</span>
        </p>
        <hr />
        <p className="lol">
          Rent <span>$449,000.00</span>
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