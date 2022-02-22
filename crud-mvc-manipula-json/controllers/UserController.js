const { validationResult } = require('express-validator');
const fs = require('fs');

let listUser = [];
let readUsuarios = fs.readFileSync('./usuarios.json', 'utf-8');

const controller = {
    viewform: function(req, res, next) {
      return res.render('users', { title: 'Express new User'});
    },
    create: (req, res) => {
        let errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors);
        }
        const { username, email, senha } = req.body;
        const newUser = { username, email, senha };
        readUsuarios = fs.readFileSync('./usuarios.json', 'utf-8');
        listUser=JSON.parse(readUsuarios);
        listUser.push(newUser);
        fs.writeFileSync('./usuarios.json', JSON.stringify(listUser), 'utf-8');
        return res.render('users', { title: 'Express', usuario: newUser });
    }
}
module.exports=controller;

