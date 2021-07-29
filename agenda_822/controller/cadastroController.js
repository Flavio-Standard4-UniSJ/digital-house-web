const multer = require('multer')
const { v4: uuidv4 } = require('uuid')
const  bcrypt  = require ('bcryptjs') 
const fs =  require('fs')
const usuarioService = require('../services/usuarioService')

const database = require('../database/models/');

const cadastroUsuario = {
    novoUsuario: (req, res, next)=> {
        res.render('novo-usuario', { title: 'Agenda 822'});
    }, //exibir formulario
    cadastraUsuario: async (req, res, next) => {
            let avatar = req.file
            let id = uuidv4()
            let { nome, cpf, data_nascimento, telefone, email, senha, pin, endereco, profissao, salario } = req.body
         console.log(avatar)
            let usuario = await usuarioService.newUser({ id, nome, cpf, data_nascimento, telefone, email, senha, pin, endereco, profissao, salario, avatar })
            console.log(usuario)
            return res.render('novo-usuario', {usuario});    
    },
    editar: (req, res, next)=>{
        const {id} = req.query
        res.render('editar', { title: 'Agenda 822', id });
    } //formulario
}

module.exports = cadastroUsuario