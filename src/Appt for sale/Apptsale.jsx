import React from 'react'

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
              src="https://rentchasers.com/wp-content/uploads/2024/07/20240426_130106-768x1024.jpg"
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
          </span>
        </p>
        <hr />
        <div id="tap-wee">
          <Link to="/pre-screen-rental-application" id="tack" >Fill Out Application Today</Link>
        </div>
      </div>
    </div>
  )
}

export default Apptsale