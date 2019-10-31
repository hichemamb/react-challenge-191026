const express = require('express');
const router = express.Router();
const profile = require('../controllers/profile');
const passport = require('passport');

router.post('/profile',  passport.authenticate('jwt', { session: false }), profile.getUserInfos);

module.exports = router;