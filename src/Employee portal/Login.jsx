import React from "react";
import { Link } from "react-router-dom";
import "../Employee portal/login.css"

const LoginForm = () => {
  return (
    <div className="tea">
      <div className="logg">
        <div className="hoted" >
          <form >
            <div className="hot">
              <label className="yeasa" htmlFor="Email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mail"
                placeholder="elo@techstudio.com"
                required
              />
            </div>
            <div className="hot">
              <label className="yeasa" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="pass"
                placeholder="Min 8 characters"
                required
              />
            </div>
            <div className="hot">  <button className="sub" type="submit">Login </button>
             <Link to="/" className="numbers">Go to Cold Stream Farm Property Management</Link></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
