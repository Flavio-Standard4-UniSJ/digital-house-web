const express = require('express');
const multer = require('multer');

const usuarioController = require('../controller/usuarioController');
const valida = require('../middleware/valida');
const storage = require('../config/multer');
const router = express.Router();

const upload = multer({storage : storage});

/* GET users listing. */
router.get('/novo-usuario', usuarioController.showFormNovoUsuario);
router.post('/novo-usuario', upload.single('avatar'), valida.valida_cadastro , usuarioController.cadastraUsuario);
router.get('/login', usuarioController.form_login);
router.post('/login', usuarioController.entrar);
router.get('/recuperar-senha/:id', usuarioController.show_form_nova_senha);
router.put('/recuperar-senha/:id', usuarioController.salvar_nova_senha);
router.get('/editar/:id', usuarioController.form_editar);
router.put('/editar-usuario/:id', usuarioController.editarUsuario);

module.exports = router;
