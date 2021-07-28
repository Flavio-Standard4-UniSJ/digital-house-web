const express = require('express');
const fs = require('fs')
const multer = require('multer')

const usuarioController = require('../controller/usuarioController')
const valida = require('../middleware/valida')
const storage = require('../config/multer')
const router = express.Router();

const upload = multer({storage : storage});
var registraUsuario = JSON.parse(fs.readFileSync('./registraUsuarios.json' , 'utf-8'))

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('novo-usuario', { title: 'Agenda 822'});
});
router.get('/login', usuarioController.form_login);

router.post('/login', usuarioController.entrar);

//upload.array('avatar')   -- múltiplos arquivos

router.post('/', upload.single('avatar'), valida.valida_cadastro , usuarioController.cadastraUsuario);

router.get('/editar', usuarioController.form_editar)

router.put('/', usuarioController.editarUsuario)

module.exports = router;
