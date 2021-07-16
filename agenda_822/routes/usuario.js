const express = require('express');
const fs = require('fs')

const router = express.Router();

var registraUsuarios = JSON.parse(fs.readFileSync('./registraUsuarios.json' , 'utf-8'))

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('novo-usuario', { title: 'Agenda 822'});
});
router.post('/', function(req, res, next) {
  const { nome, cpf, data_nascimento, telefone, email, senha, pin, endereco, profissao, salario } = req.body
  const usuario = { nome, cpf, data_nascimento, telefone, email, senha, pin, endereco, profissao, salario }
  fs.writeFileSync("./registraUsuarios.json", JSON.stringify(usuario,null,2))
  console.log( usuario.nome );
  res.render('novo-usuario', { title: 'Agenda 822', usuario });
});

module.exports = router;
