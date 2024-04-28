const express = require("express");
const router = express.Router();
const Onboarding = require("../models/Onboarding");

router.post("/submit", async (req, res) => {
  try {
    const { fullName, address, image, video } = req.body;

    const newOnboarding = new Onboarding({
      fullName,
      address,
      image,
      video,
    });

    const savedOnboarding = await newOnboarding.save();

    res
      .status(201)
      .json({
        message: "Onboarding data submitted successfully",
        data: savedOnboarding,
      });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
