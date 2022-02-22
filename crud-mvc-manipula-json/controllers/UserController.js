const { validationResult } = require('express-validator');
const fs = require('fs');
const multer = require('multer');

const storage = require('../config/multer');

let listUser = [];
let readUsuarios = fs.readFileSync('./usuarios.json', 'utf-8');

var upload = multer().array('foto');

const controller = {
    viewform: function(req, res, next) {
      return res.render('users', { title: 'Express new User'});
    },
    create: (req, res) => {
        let errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors);
        }
        const foto = req.file;
        const { username, email, senha } = req.body;
        const newUser = { username, email, senha, foto };
        readUsuarios = fs.readFileSync('./usuarios.json', 'utf-8');
        listUser=JSON.parse(readUsuarios);
        listUser.push(newUser);
        fs.writeFileSync('./usuarios.json', JSON.stringify(listUser), 'utf-8');
        return res.render('users', { title: 'Express', usuario: newUser });
    }
}
module.exports=controller;

