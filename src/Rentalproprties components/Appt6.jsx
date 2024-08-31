import React from 'react'
import "../styles/list.css";
import { Link } from "react-router-dom";
const Appt6 = () => {
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
              src="https://rentchasers.com/wp-content/uploads/2024/08/20240816_140229-768x1024.jpg"
              alt=""
            />
          </span>
        </p>
        <hr />
        <p className="lol">
          Address <span> 834 W Chestnut st. Apt 2 Allentown, Pennsylvania 18102</span>
        </p>
        <hr />
        <p className="lol">
          Bedrooms <span>2</span>
        </p>
        <hr />
        <p className="lol">
          Rent <span>$1,175.00</span>
        </p>
        <hr />
        <p className="lol">
          Property Description{" "}
          <span>
            <p>•2 bedrooms., living room and a Dine-in Kitchen</p>
            <p>•Off street parking</p>
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

export default Appt6