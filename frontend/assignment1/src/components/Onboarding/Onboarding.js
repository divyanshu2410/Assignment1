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

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageCapture = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const image = canvas.toDataURL("image/jpeg");
    setFormData({ ...formData, image });
  };

  const handleVideoCapture = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((error) => {
        console.error("Error accessing camera:", error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/onboarding", formData);
      console.log("Onboarding successful:", res.data);
    } catch (error) {
      console.error("Error:", error);
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
        <div className="capture-container">
          <div className="capture-preview">
            <video ref={videoRef} autoPlay muted />
            <canvas ref={canvasRef} style={{ display: "none" }} />
          </div>
          <div className="capture-buttons">
            <button type="button" onClick={handleVideoCapture}>
              Start Video Capture
            </button>
            <button type="button" onClick={handleImageCapture}>
              Capture Image
            </button>
          </div>
        </div>
        <button type="submit" className="onboarding-button">
          Complete Onboarding
        </button>
      </form>
    </div>
  );
};

export default Onboarding;
