const express = require('express')
const session = require('express-session')
const cadastroController = require('../controller/cadastroController')

const valida = require('../middleware/valida')

const router = express.Router();

router.get('/', cadastroController.novoUsuario); //exibe formulário

router.post('/', valida.valida_cadastro , cadastroController.cadastraUsuario);

router.put('/:id', cadastroController.editar)

module.exports = router;
