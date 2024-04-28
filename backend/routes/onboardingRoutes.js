const express = require("express");
const router = express.Router();
const cors = require("cors"); 
const Onboarding = require("../models/Onboarding");

router.use(cors());

router.post("/upload", async (req, res) => {
  try {
    const { fullName, address } = req.body;
    const image = req.files.image;
    const video = req.files.video;

    const newOnboarding = new Onboarding({
      fullName,
      address,
      image: {
        data: image.data,
        contentType: image.mimetype
      },
      video: {
        data: video.data,
        contentType: video.mimetype
      },
    });

    const savedOnboarding = await newOnboarding.save();
    res.status(201).json(savedOnboarding);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
