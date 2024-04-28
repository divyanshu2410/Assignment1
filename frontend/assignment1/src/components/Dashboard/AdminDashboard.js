// AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customers data from the backend API
    const fetchCustomers = async () => {
      try {
        const res = await axios.get('/api/admin/customers');
        setCustomers(res.data);
      } catch (error) {
        console.error(error.response.data);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer._id}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
