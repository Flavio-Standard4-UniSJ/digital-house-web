const UsuarioModel = require('../models/UsuarioModel');
const fs= require('fs');
 
const userServices = {
    busca: (username)=>{
        readUsuarios = fs.readFileSync('./usuarios.json', 'utf-8');
        listUser=JSON.parse(readUsuarios);
        const usuario = listUser.filter((user) => user.username== username);
        //filter filtra o usuario na lista de usuarios
        if(usuario.length == 0) {
            return res.status(400).send(`O usuário não está na lista!`);
        }else {
            console.log(usuario);//se o usuario foi encontrado retorna se nao informa que nao esta na lista
        }
        return usuario;
    },
    createUser: ({ 
        username, 
        email, 
        senha, 
        foto }) =>{
            const usuario = new UsuarioModel(
                username, 
                email, 
                senha, 
                foto);
                readUsuarios = fs.readFileSync('./usuarios.json', 'utf-8');
                listUser=JSON.parse(readUsuarios);
                listUser.push(usuario);
                fs.writeFileSync('./usuarios.json', JSON.stringify(listUser), 'utf-8');
        return usuario;        
    }
}

module.exports = userServices;