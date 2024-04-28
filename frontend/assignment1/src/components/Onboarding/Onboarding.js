import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Onboarding.css";

const Onboarding = () => {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    imageUrl: "",
    videoUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    try {
      const res = await axios.post("/api/upload/image", formData);
      const imageUrl = res.data.imageUrl;
      setFormData({ ...formData, imageUrl });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleVideoUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("video", file);
    try {
      const res = await axios.post("/api/upload/video", formData);
      const videoUrl = res.data.videoUrl;
      setFormData({ ...formData, videoUrl });
    } catch (error) {
      console.error("Error uploading video:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/onboarding", formData);
      history.push("/dashboard");
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., display error message to the user)
    }
  };

  return (
    <div className="onboarding-container">
      <h2 className="onboarding-heading">Onboarding</h2>
      <form className="onboarding-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="onboarding-input"
          required
        />
        <input
          type="text"
          placeholder="Address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="onboarding-input"
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="onboarding-input"
          required
        />
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          className="onboarding-input"
          required
        />
        <button type="submit" className="onboarding-button">
          Complete Onboarding
        </button>
      </form>
    </div>
  );
};

export default Onboarding;
