import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import person from "../assets/person.png";
import people from "../assets/people.png";
import "../styles/header.css";
import { Link } from "react-router-dom";
import logo from "../assets/CFPM.png";
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
                <Link to="/repair-request" className="repair">
                  Repair Request
                </Link>
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
                <Link to="/pre-screen-rental-application" className="repair">
                  Online Rental Application
                </Link>
                <br />
                <Link to="/download" className="repair">
                  Download Rental Application
                </Link>
              </NavDropdown>
            </div>
          </Link>
          <p>443-364-0723</p>
        </div>
      </div>
      <div id="head">
        <div className="lego">
          <img src={logo} alt="logo" />
        </div>
        <div className="prop"></div>
        <div className="head sticky top-0 z[20]">
          <div className="dark">
            <Link to="/" className="repair">
              Home
            </Link>

            <Link to="contact" className="repair">
              Contact Us
            </Link>
            <Link to="openbox" className="repair">
              Open Box
            </Link>
          </div>
          <div className="dark">
            <Link to="/rent" className="repair">
              Rental Properties
            </Link>
            <Link to="sale" className="repair">
              Properties For Sale
            </Link>
            <Link to="employee" className="repair">
              Employee Portal
            </Link>
          </div>
        </div>
        <div className="prop"></div>
      </div>
    </div>
  );
};

export default Header;
