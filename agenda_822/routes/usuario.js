const express = require('express');
const fs = require('fs')

const usuarioController = require('../controller/usuarioController')

const valida = require('../middleware/valida')
const storage = require('../config/multer')

const router = express.Router();

router.get('/', usuarioController.form_login);

router.post('/', usuarioController.entrar);

module.exports = router;
