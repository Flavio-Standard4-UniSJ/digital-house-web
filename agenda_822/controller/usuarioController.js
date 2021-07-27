const multer=require('multer')

const fs =  require('fs')

const  storage = require('../config/multer')

var upload = multer().single('avatar') 

let id 
var novo_usuario=[]
var listaUsuarios=[]

var registraUsuario = JSON.parse(fs.readFileSync('./registraUsuarios.json' , 'utf-8'))
id = registraUsuario.novo_usuario[registraUsuario.novo_usuario.length-1].id

const usuarios = {
    cadastraUsuario: (req, res, next) => {
            let avatar = req.file
            let id = 3
            let { nome, cpf, data_nascimento, telefone, email, senha, pin, endereco, profissao, salario } = req.body
        
            let usuario = { id, nome, cpf, data_nascimento, telefone, email, senha, pin, endereco, profissao, salario, avatar }
            console.log(avatar)

            registraUsuario.novo_usuario.push(usuario)
            fs.writeFileSync("./registraUsuarios.json", JSON.stringify(registraUsuario,null,2))

            res.render('novo-usuario', { title: 'Agenda 822', usuario: registraUsuario });    
    },
    form_login: (req, res, next) => {
        res.render('login', { title: 'Agenda 822'} );
    },
    form_editar: (req, res, next)=>{
        registraUsuario = JSON.parse(fs.readFileSync("./registraUsuarios.json" , 'utf-8'))
        for(let usuarios of registraUsuario.novo_usuario){
            listaUsuarios.push(usuarios)
        }
        res.render('editar', { title: 'Agenda 822', elementos:listaUsuarios });
    },
    editarUsuario: (req, res, next) => {
        registraUsuario = JSON.parse(fs.readFileSync("./registraUsuarios.json" , 'utf-8'))
        res.render('editar-usuario', { title: 'Agenda 822', usuario: registraUsuario });
    },
    
    entrar: (req, res, next) => {
        const { email, senha } = req.body
        registraUsuario = JSON.parse(fs.readFileSync('./registraUsuarios.json' , 'utf-8'))  
        for(let usuarios of registraUsuario.novo_usuario){
           if(email==usuarios.email){
             return res.render('login', { title: 'Agenda 822', usuarios })
           } 
           return res.render('login', { title: 'Agenda 822' })
        }
       res.render('login', { title: 'Agenda 822', usuario: usuarios }) 
    }
}
module.exports=usuarios