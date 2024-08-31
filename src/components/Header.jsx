import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import person from "../assets/person.png";
import people from "../assets/people.png";
import "../styles/header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="bob">
          <Link className="repair">
            <div className="person">
              <img src={person} alt="" />
              <NavDropdown
                title="Tenants"
                className="repairs"
                id="basic-nav-dropdown "
              >
                <Link className="repair">Repair Request</Link>
                <br />
                <Link to="/utility" className="repair">
                  Utility Contacts
                </Link>
              </NavDropdown>
            </div>
          </Link>

          <Link to="/owner" className="repair">
            <div className="person">
              <img src={people} alt="" />
              <Nav.Link href="#home">Owners</Nav.Link>
            </div>
          </Link>
        </div>
        <div className="bob">
          <Link className="repair">
            <div className="person">
              <img src={person} alt="" />
              <NavDropdown
                className="repair"
                title="Apply Today"
                id="basic-nav-dropdown"
              >
                <Link className="repair">Online Rental Application</Link>
                <br />
                <Link to="/download" className="repair">
                  Download Rental Application
                </Link>
              </NavDropdown>
            </div>
          </Link>
          <p>610-432-1553</p>
        </div>
      </div>
      <div id="head">
        <div>
          <img src="" alt="logo" />
        </div>
        <div className="prop"></div>
        <div className="head sticky top-0 z[20]">
          <div className="dark">
            <Link to="/" className="repair">
              Home
            </Link>
            <Link to="/rent" className="repair">
              Rental Properties
            </Link>
            <Link to="sale" className="repair">
              Properties For Sale
            </Link>
          </div>
          <div className="dark">
            <Link to="openbox" className="repair">
              Open Box
            </Link>
            <Link to="contact" className="repair">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="prop"></div>
      </div>
    </div>
  );
};

export default Header;
