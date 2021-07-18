const fs =  require('fs')

let id 
var novo_usuario=[]

var registraUsuario = JSON.parse(fs.readFileSync('./registraUsuarios.json' , 'utf-8'))
id = registraUsuario.novo_usuario[registraUsuario.novo_usuario.length-1].id

const usuarios = {
    cadastraUsuario: (req, res, next) => {
        let avatar = '/images/avatar.svg'
        let id = 2
        let { nome, cpf, data_nascimento, telefone, email, senha, pin, endereco, profissao, salario } = req.body
       
        let usuario = { id, nome, cpf, data_nascimento, telefone, email, senha, pin, endereco, avatar, profissao, salario }
        
        registraUsuario.novo_usuario.push(usuario)
        fs.writeFileSync("./registraUsuarios.json", JSON.stringify(registraUsuario,null,2))

        res.render('novo-usuario', { title: 'Agenda 822', usuario: registraUsuario });
    },
    entrar: (req, res, next) => {
        const { email, senha } = req.body
        registraUsuario = JSON.parse(fs.readFileSync('./registraUsuarios.json' , 'utf-8'))  
       
        if(email == registraUsuario.email && senha == registraUsuario.senha){ 
          return res.render('login', { title: 'Agenda 822', usuario: registraUsuario });
        }else{
            return res.render('login', { title: 'Agenda 822'} );
        }
    }
}
module.exports=usuarios