const express = require("express");
const router = express.Router();
const Onboarding = require("../models/Onboarding");
const cors = require("cors");

const fileUpload = require("express-fileupload");
router.use(fileUpload());
router.use(cors());

router.post("/upload", async (req, res) => {
  try {
    const { fullName, address } = req.body;
    const { image, video } = req.files;

    if (!image || !video) {
      return res
        .status(400)
        .json({ message: "Image and video files are required" });
    }

    const imageData = image.data;
    const imageContentType = image.mimetype;
    const videoData = video.data;
    const videoContentType = video.mimetype;

    const newOnboarding = new Onboarding({
      fullName,
      address,
      image: {
        data: imageData,
        contentType: imageContentType,
      },
      video: {
        data: videoData,
        contentType: videoContentType,
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
