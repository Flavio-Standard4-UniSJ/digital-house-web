const express = require('express');
const router = express.Router();
const controller = require('../controllers/LegendariesControllers');

/* GET legenderies. */
router.get('/', controller.index);


module.exports = router;
