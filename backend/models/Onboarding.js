const mongoose = require("mongoose");

const onboardingSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  address: { type: String, required: true },
  image: { type: String, required: true },
  video: { type: String, required: true },
});

module.exports = mongoose.model("Onboarding", onboardingSchema);
