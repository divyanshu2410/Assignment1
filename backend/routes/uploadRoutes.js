const express = require('express');
const router = express.Router();
const Upload = require('../models/upload');


router.post('/upload', async (req, res) => {
    try {
        const { name, address } = req.body;
        const image = req.files['image'][0].filename;
        const video = req.files['video'][0].filename;

        const newUpload = new Upload({ name, address, image, video });
        await newUpload.save();

        res.status(201).send('Upload successful');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
