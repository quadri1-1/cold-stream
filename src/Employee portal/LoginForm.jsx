import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Employee portal/login.css"; // Adjust the import path as necessary

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Expected username and password
    const expectedUsername = "admin";
    const expectedPassword = "admin123";

    // Simple authentication logic
    if (username === expectedUsername && password === expectedPassword) {
      console.log("Login successful!");
      setError("Login successful!");
      navigate("/employee/dashboard"); // Navigate to the dashboard
    } else {
      console.log("Invalid username or password");
      setError("Invalid username or password. Please try again.");
      alert("Hint: Username: admin, Password: admin123");
    }
  };

  return (
    <div id="screen" className="tea">
      <div className="logg">
        <div className="hoted">
          <h2>Login</h2>
          <form action="/dashboard" onSubmit={handleLogin}>
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
                onChange={handleUsernameChange}
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
                onChange={handlePasswordChange}
                required
              />
            </div>
            {error && <p className="success">{error}</p>}
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

export default LoginForm;
