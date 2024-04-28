const mongoose = require("mongoose");

const onboardingSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  video: {
    data: Buffer,
    contentType: String,
  },
});

const Onboarding = mongoose.model("Onboarding", onboardingSchema);

module.exports = Onboarding;
