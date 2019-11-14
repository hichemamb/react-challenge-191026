const express = require('express');
const router = express.Router();
const profile = require('../controllers/profile');
const passport = require('passport');

router.put('/profile',  passport.authenticate('jwt', { session: false }), profile.putUserInfos);

module.exports = router;