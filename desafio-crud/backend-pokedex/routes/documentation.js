const express = require('express');
const router = express.Router();
const controller = require('../controllers/LegendariesController');

/* GET legendaries. */
router.get('/', function(req, res, next) {
    res.render('documentation');
  });


module.exports = router;