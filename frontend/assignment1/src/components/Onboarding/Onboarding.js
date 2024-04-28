import React, { useState, useRef } from "react";
import axios from "axios";
import "./Onboarding.css";

const Onboarding = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    image: null,
    video: null,
  });

  const [imageCaptured, setImageCaptured] = useState(false);

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
        setImageCaptured(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, video: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://assignment1-tp12.onrender.com/api/onboarding", formData);
      console.log("Onboarding successful:", res.data);
      // Redirect to user dashboard upon successful onboarding
      // history.push("/userdashboard");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="onboarding-container">
      <h2 className="onboarding-heading">Form</h2>
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
        <div className="capture-container">
          <div className="capture-buttons">
            <label>
              Upload Image:
              <input type="file" accept="image/*" onChange={handleImageUpload} />
            </label>
          </div>
          {imageCaptured && (
            <div className="capture-buttons">
              <label>
                Upload Video:
                <input type="file" accept="video/*" onChange={handleVideoUpload} />
              </label>
            </div>
          )}
          <button type="submit" className="onboarding-button" disabled={!imageCaptured}>
            Complete Onboarding
          </button>
        </div>
      </form>
    </div>
  );
};

export default Onboarding;
