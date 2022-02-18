const express = require('express');
const controller = require('../controllers/LegendariesController');
const router = express.Router();

controller
/* GET home page. */
router.get('/', controller.index);

module.exports = router;
