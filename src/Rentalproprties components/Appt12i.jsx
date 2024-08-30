import React from 'react'
import "../styles/list.css";
import { Link } from "react-router-dom";
const Appt12i = () => {
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
          <span> 	1801 E Cedar st.Allentown, Pennsylvania 18109</span>
        </p>
        <hr />
        <p className="lol">
          Bedrooms <span>3</span>
        </p>
        <hr />
        <p className="lol">
          Rent <span>$</span>
        </p>
        <hr />
        <p className="lol">
          Property Description{" "}
          <span>
            <p>•Three Bedroom house end of row/ Half detached</p>
            <p>•Finished Basement</p> 
            <p>•Gas Utilities</p> 
            <p>•Central AC</p>
            <p>•2 Car detached garage</p>
          </span>
        </p>
        <hr />
        <Link>View Details</Link>
      </div>
    </div>
  )
}

export default Appt12i