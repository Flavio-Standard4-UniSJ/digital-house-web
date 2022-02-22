const express = require('express');
const controller = require('../controllers/UserController');
const validacao = require('../middleware/validacao');

const router = express.Router();

/* GET users listing. */
router.get('/', controller.viewform);
router.post('/', validacao, controller.create);

module.exports = router;
