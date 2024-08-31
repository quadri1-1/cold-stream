import React from "react";
import people from "../assets/people.png";
import apartment from "../assets/apartment.png";
import "../owner Componenr/Owner.css";
import { Link } from "react-router-dom";

const Owner = () => {
  return (
    <div className="">
      <div className="owners">
        <div className="owner">
          <img src={apartment} alt="" />
          <h5>Full Property management includes:</h5>
          <p>•Inspections with Section 8</p>
          <p>•Random property inspections with reports</p>
          <p>•Tenant complaints/concerns</p>
          <p>•Emergency calls- 24 hours a day</p>
          <p>•Preventive maintenance suggestions</p>
          <p>•Monthly accounting sheets at no charge</p>
          <p>•Reduced labor rate for minor repairs</p>
          <p>•No fee for emergency call</p>
          <p>•Tenant placement</p>
        </div>
        <div className="owner">
          <img src={people} alt="" />
          <h5>Other value-added services include:</h5>
          <p>•Court appearances</p>
          <p>•Showings of vacant properties</p>
          <p>•Make deposits into owners’ bank accounts</p>
          <p>• Sign a new lease with the tenant</p>
          <p>•Hang notices for tenants</p>
          <p>•Possession of property with Constable</p>
          <p>•Setup and Maintain accounts with Pest Control</p>
          <p>•Bilingual staff</p>
        </div>
      </div>
      <div className="stones">
        <Link className="stone" to="/ownerpot">
          <button >
            <img src={apartment} alt="" />
            Access Owners Portal
          </button>
        </Link>
      </div>
      <div className="invest">
        <hr className="hrs" />
        <h2>CALL US WE ARE HERE TO PROTECT YOUR INVESTMENT</h2>
        <hr className="hrs" />
      </div>
    </div>
  );
};

export default Owner;
