import React from "react";
import "./Dashboard.css"; // Assuming you have a separate CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li>Overview</li>
            <li>Reports</li>
            <li>Settings</li>
            <li>Profile</li>
            <li>Logout</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="dashboard-header">
          <h1>Welcome, Admin</h1>
        </header>
        <section className="content">
          <div className="card">
            <h3>Statistics</h3>
            <p>Display some statistics here</p>
          </div>
          <div className="card">
            <h3>Recent Activities</h3>
            <p>Display recent activities here</p>
          </div>
          <div className="card">
            <h3>Notifications</h3>
            <p>Display notifications here</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
