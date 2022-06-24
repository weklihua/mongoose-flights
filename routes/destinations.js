const express = require('express')
const router = express.Router()
const destinationsCtrl = require('../controllers/destinations')

router.post('/flights/:id/destinations', destinationsCtrl.create)


module.exports = router


// var express = require('express');
// var router = express.Router();
// const destinationsCtrl = require('../controllers/destinations')


// router.post('/', flightsCtrl.create)

// module.exports = router;