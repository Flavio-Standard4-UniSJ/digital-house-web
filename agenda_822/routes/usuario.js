const express = require('express');
const fs = require('fs')

const usuarioController = require('../controller/usuarioController')

const router = express.Router();

var registraUsuario = JSON.parse(fs.readFileSync('./registraUsuarios.json' , 'utf-8'))

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('novo-usuario', { title: 'Agenda 822'});
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Agenda 822'} );
});

router.post('/login', usuarioController.entrar);

router.post('/', usuarioController.cadastraUsuario);


module.exports = router;
