const express = require('express');
const router = express.Router();
const upload = require('../controllers/upload');

router.post('/upload', upload.setPicture);

module.exports = router;