import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendRequest = async () => {
    const res = await axios
      .post("https://assignment1-tp12.onrender.com/api/auth/login", formData)
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    sendRequest().then((data) => {
      if (data && data.role === "User") {
        history("/onboarding");
      } else if (data && data.role === "Admin") {
        history("/adminDashboard");
      } else {
        console.log("Invalid role or data");
      }
    });
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="login-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="login-input"
          required
        />
        <button type="submit" className="login-button">
          Login
        </button>
        <p>
          New User? <Link to="/signup">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
