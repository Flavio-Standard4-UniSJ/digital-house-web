const express = require('express');
const multer = require('multer');

const controller = require('../controllers/UserController');
const validacao = require('../middleware/validacao');
const storage = require('../config/multer');

const upload = multer({storage : storage});

const router = express.Router();
/* GET users listing. */
router.get('/', controller.viewform);
router.get('/:username', controller.searchUser);//localhost:8000/users/Raikou
router.post('/', upload.array('foto'), validacao, controller.create);
router.get('/config/:username', controller.viewformconfig);//localhost:8000/users/editar/Raikou
router.put('/config', upload.array('foto'), validacao, controller.update);
router.delete('/config', controller.delete);

module.exports = router;
