const fs = require('fs');

let listUser = [];
let readUsuarios = fs.readFileSync('./usuarios.json', 'utf-8');

const controller = {
    index: function(req, res, next) {
      readUsuarios = fs.readFileSync('./usuarios.json', 'utf-8');
      listUser=JSON.parse(readUsuarios);
      return res.render('index', { title: 'Express', lista: listUser });
    }
}
module.exports=controller;

