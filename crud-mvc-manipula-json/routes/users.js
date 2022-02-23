const express = require('express');
const multer = require('multer');

const controller = require('../controllers/UserController');
const validacao = require('../middleware/validacao');
const storage = require('../config/multer');

const upload = multer({storage : storage});

const router = express.Router();
/* GET users listing. */
router.get('/', controller.viewform);
router.get('/:username', controller.searchUser);//busca um usuario
router.post('/', upload.array('foto'), validacao, controller.create);
router.get('/editar/:username', controller.viewformedit);
router.put('/editar', upload.array('foto'), validacao, controller.update);

module.exports = router;
