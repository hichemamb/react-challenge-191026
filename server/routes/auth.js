const express = require('express');

const router = express.Router();

const auth = require('../controllers/auth');


router.get('/register', auth.register);

module.exports = router;