const express = require('express');

const router = express.Router();

const showHello = require('../controllers/showHello');


router.get('/showHello', showHello.showHello);

module.exports = router;