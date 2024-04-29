import React, { useState } from 'react';
import './Onboarding.css';

const Onboarding = () => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleImageCapture = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleVideoCapture = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setVideo(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // You can handle form submission here, e.g., send data to server
    const userData = {
      fullName,
      address,
      city,
      country,
      image,
      video,
    };
    console.log(userData);
  };

  return (
    <div className="onboarding-container">
      <h2 className="onboarding-heading">User Onboarding Form</h2>
      <form className="onboarding-form" onSubmit={handleSubmit}>
        <div>
          <input type="text" className="onboarding-input" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>
        <div>
          <input type="text" className="onboarding-input" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </div>
        <div>
          <input type="text" className="onboarding-input" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
        </div>
        <div>
          <input type="text" className="onboarding-input" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} required />
        </div>
        <div className="capture-container">
          <label htmlFor="imageInput" className="onboarding-input capture-buttons">
            Upload Profile Image
            <input type="file" accept="image/*" id="imageInput" onChange={handleImageCapture} />
          </label>
          {image && <img src={image} alt="User" className="capture-preview" />}
        </div>
        <div className="capture-container">
          <label htmlFor="videoInput" className="onboarding-input capture-buttons">
            Upload Introduction Video
            <input type="file" accept="video/*" id="videoInput" onChange={handleVideoCapture} />
          </label>
          {video && (
            <video width="320" height="240" controls className="capture-preview">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <button type="submit" className="onboarding-button">Submit</button>
      </form>
    </div>
  );
};

export default Onboarding;
