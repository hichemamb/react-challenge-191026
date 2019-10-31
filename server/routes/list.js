const express = require('express');
const router = express.Router();
const list = require('../controllers/list');
const passport = require('passport');

router.get('/list',  passport.authenticate('jwt', { session: false }), list.getStudentsList);

module.exports = router;