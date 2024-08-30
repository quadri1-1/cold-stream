import React from "react";
import { Link } from "react-router-dom";
import mail from "../assets/mail.png";
import "../styles/form.css";
const Form = () => {
  return (
    <div className="gang">
      <div className="gland">
        <img src={mail} alt="" />
        <h5>Contact Us</h5>
      </div>
      <div>
        <form>
          <div className="ford">
            <label className="yeasa" htmlFor="name">
              Full name
            </label>
            <input
              type="textbox"
              id="name"
              className="mail"
              required
            />
          </div>
          <div className="ford">
            <label className="yeasa" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mail"
              required
            />
          </div>
          <div className="fords">
            <label className="yeasa" htmlFor="message">
              message
            </label>
            <input
              type="text-box"
              className="pass"
              id="message"
              required
            />
          </div>
          <button className="ini">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
