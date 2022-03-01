const express = require('express');
const multer = require('multer');

const controller = require('../controllers/LegendariesController');
const storage = require('../config/multer');

const router = express.Router();

const upload = multer({storage : storage});

/* GET legendaries. */
router.get('/', controller.index);
router.get('/newLegendary', controller.viewform);
router.post('/newLegendary', upload.array('foto'), controller.create);
router.put('/:id', controller.update);

module.exports = router;