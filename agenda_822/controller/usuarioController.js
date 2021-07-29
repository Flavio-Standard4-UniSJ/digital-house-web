const multer = require('multer')
const { v4: uuidv4 } = require('uuid')
const  bcrypt  = require ('bcryptjs') 
const fs =  require('fs')
const usuarioService = require('../services/usuarioService')

const database = require('../database/models/');

const storage = require('../config/multer')
var upload = multer().single('avatar') 

const usuarios = {    
    form_login: (req, res, next) => {
        res.render('login', { title: 'Agenda 822'} );
    },

    entrar: (req, res, next) => {
        const { email, senha } = req.body
        res.render('restrito', { title: 'Agenda 822', email, senha }) 
    }
}
module.exports = usuarios