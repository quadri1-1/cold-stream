import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../Employee portal/login.css";

const LoginForm = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      onLogin();
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="tea">
      <div className="logg">
        <div className="hoted">
          <form onSubmit={handleLogin}>
            <div className="hot">
              <label className="yeasa" htmlFor="Email">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="mail"
                placeholder="elo@techstudio.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="error">{error}</p>}
            <div className="hot">
              <button className="sub" type="submit">
                Login
              </button>
              <Link to="/" className="numbers">
                Go to Cold Stream Farm Property Management
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Adding prop types validation
LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default LoginForm;
