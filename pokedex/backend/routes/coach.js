const express = require('express');
const multer = require('multer');

const controller = require('../controllers/CoachController');
const storage = require('../config/multer');
const validaCoach = require('../middlewares/validaCoach');

const router = express.Router();

const upload = multer({storage : storage});

/* GET users listing. */
router.get('/', controller.index);
router.post('/',  upload.array('foto'), validaCoach, controller.create);

module.exports = router;
