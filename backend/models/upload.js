const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
    name: String,
    address: String,
    image: String,
    video: String,
});

module.exports = mongoose.model('Upload', uploadSchema);
