import React from "react";
import "../Openbox/onlinepay.css";
import { Link } from "react-router-dom";

const Onlinepay = () => {
  return (
    <div>
      <div id="onli">
        <div className="onli">
          <img
            src="https://www.supportingstrategies.com/wp-content/uploads/2022/03/Revenue.png"
            alt=""
          />
          <h6>Pay Your Rent Online</h6>
          <button>Pay Rent Now</button>
          <Link className="paylink">
            <img
              src="https://rentchasers.com/wp-content/uploads/2022/06/rent.png"
              alt=""
            />
          </Link>
        </div>
        <div className="onli">
          <img
            src="https://www.supportingstrategies.com/wp-content/uploads/2022/03/Revenue.png"
            alt=""
          />
          <h6>Pay Your Rent Online</h6>
          <button>Pay Rent Now</button>
          <Link className="paylink">
            <img
              src="https://rentchasers.com/wp-content/uploads/2022/06/rent.png"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Onlinepay;
