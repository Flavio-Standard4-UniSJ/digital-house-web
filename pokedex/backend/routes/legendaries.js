const express = require('express');
const multer = require('multer');

const controller = require('../controllers/LegendariesController');
const storage = require('../config/multer');

const router = express.Router();

const upload = multer({storage : storage});

/* GET legendaries. */
router.get('/', controller.index);
router.get('/:id', controller.legendaryById);
router.get('/newLegendary', controller.viewform);
router.post('/newLegendary', upload.single('foto'), controller.create);
router.put('/:id', upload.single('foto'),controller.update);

module.exports = router;