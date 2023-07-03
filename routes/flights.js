var express = require('express');
var router = express.Router();

// You'll be creating this controller module next
const flightsCtrl = require('../controllers/flights');

//get /flights
router.get('/', flightsCtrl.index);
//get /movies/new
router.get('/new', flightsCtrl.new);

module.exports = router;
