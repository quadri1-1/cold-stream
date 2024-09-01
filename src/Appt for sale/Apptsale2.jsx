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
              src="https://rentchasers.com/wp-content/uploads/2024/07/20240708_105604-768x1024.jpg"
              alt=""
            />
          </span>
        </p>
        <hr />
        <p className="lol">
          Address{" "}
          <span>
            {" "}
            1801 E Cedar st. Allentown, Pennsylvania 18109
          </span>
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