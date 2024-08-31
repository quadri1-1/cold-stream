import React from "react";
import east from "../assets/east.png";
import right from "../assets/right.png";
import "../owner Componenr/ownerpot.css";
import { Link } from "react-router-dom";
const Ownerpot = () => {
  return (
    <div className="container">
      <div>
        <h1>Owners Portal</h1>
      </div>
      <div className="monitor">
        <h2>Monitor Your Account </h2>
        <div className="acc">
          <div>
            <div className="parle">
              <div className="log">
                <img style={{ width: "30px" }} src={east} alt="" />
                <h3>Log In Now</h3>
              </div>
              <p>
                Monitor your property investment by logging in to our 24/7
                owners portal.
              </p>
            </div>
            <div className="parle">
              <div className="log">
                <img style={{ width: "30px" }} src={east} alt="" />
                <h3>Need Assistance</h3>
              </div>
              <p>
                If you need help accessing your account, please give us a call:
                <Link> (610) 432-1553</Link> 
              </p>
            </div>
            <div className="parle">
              <div className="log">
                <img style={{ width: "30px" }} src={east} alt="" />
                <h3>Looking for Property Management?</h3>
              </div>
              <p>
                If you're looking for a property manager in Allentown, <Link to="/contact" > contact
                us</Link>  to get started, or call: <Link> (610) 432-1553</Link> 
              </p>
            </div>
          </div>
          <button>
            LOGIN TO OWNERS PORTAL <img src={right} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ownerpot;
