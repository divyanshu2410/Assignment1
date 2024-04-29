import React from "react";
import { Link } from "react-router-dom";
import "./UserDashboard.css"

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <h2>Welcome to Your Dashboard</h2>
      <p>Feel free to explore your account details and settings.</p>
      <p>If you need any assistance, please <Link to="/support">contact support</Link>.</p>
    </div>
  );
};

export default UserDashboard;
