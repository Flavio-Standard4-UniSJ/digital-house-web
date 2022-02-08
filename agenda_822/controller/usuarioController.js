const multer = require('multer');
const { v4: uuidv4 } = require('uuid');

const  storage = require('../config/multer')

var upload = multer().single('avatar') 
let usuario = [];

const usuarios = {
    showFormNovoUsuario: function(req, res, next) {
        res.render('novo-usuario', { title: 'Agenda 822'});
    },
    cadastraUsuario: (req, res, next) => {
        let avatar = req.file;
        let id = uuidv4();
        let { nome, cpf, data_nascimento, telefone, email, senha, pin, endereco, profissao, salario } = req.body;
        usuario.push({ id, nome, cpf, data_nascimento, telefone, email, senha, pin, endereco, profissao, salario, avatar });
        res.render('novo-usuario', { title: 'Agenda 822', usuario: usuario });    
    },
    form_editar: (req, res, next)=>{
        res.render('editar', { title: 'Agenda 822'});
    },
    editarUsuario: (req, res, next) => {
        res.render('editar-usuario', { title: 'Agenda 822'});
    },
    form_login: (req, res, next) => {
        res.render('login', { title: 'Agenda 822'} );
    },
    entrar: (req, res, next) => {
        const { email, senha } = req.body
        
       res.render('login', { title: 'Agenda 822'}) 
    },
    show_form_nova_senha:(req, res, next)=>{
        res.render('recuperar-senha', { title: 'Agenda 822'}) 
    },
    salvar_nova_senha: (req, res, next)=>{
        res.redirect('/', { title: 'Agenda 822'});
    }
}
module.exports=usuarios