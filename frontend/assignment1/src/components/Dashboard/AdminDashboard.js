import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        "https://assignment1-tp12.onrender.com/api/admin/users"
      );
      setUsers(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const handleDeleteCustomer = async (_id) => {
    try {
      await axios.delete(
        `https://assignment1-tp12.onrender.com/api/admin/users/${_id}`
      );
      fetchUsers();
    } catch (error) {
      console.error("Error deleting customer:", error);
    }
  };

  const handleRefresh = () => {
    fetchUsers();
  };

  return (
    <div className="admin-dashboard-container">
      <h2 className="admin-dashboard-heading">Admin Dashboard</h2>
      <button className="refresh-button" onClick={handleRefresh}>
        Refresh
      </button>
      <div className="customer-list">
        <h3>Users</h3>
        <ul>
          {users.map((users) => (
            <li key={users._id}>
              <span>{users.username}</span>
              <span>{users.email}</span>
              <button onClick={() => handleDeleteCustomer(users._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
