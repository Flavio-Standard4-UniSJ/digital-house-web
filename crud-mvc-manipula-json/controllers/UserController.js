const { validationResult } = require('express-validator');
const fs = require('fs');
const multer = require('multer');

const userServices = require('../services/userServices');

const storage = require('../config/multer');

let listUser = [];
let readUsuarios = fs.readFileSync('./usuarios.json', 'utf-8');

var upload = multer().array('foto');

const controller = {
    viewform: function(req, res, next) {
      return res.render('users', { title: 'Express new User'});
    },
    searchUser: (req, res)=>{
        const { username } = req.params;
        //listUser abre a lista de todos usuarios
        let usuario =  userServices.busca(username); 
        return res.render('users', { title: 'Express', usuario });
    },
    create: (req, res) => {
        let errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors);
        }
        const foto = req.file;
        const { username, email, senha } = req.body;

        const newUser = userServices.createUser({ username, email, senha, foto });
        
        return res.render('users', { title: 'Express', usuario: newUser });
    }
}
module.exports=controller;

