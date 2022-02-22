const UsuarioModel = require('../models/UsuarioModel');

const userServices = {
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
        return usuario;        
    }
}

module.exports = userServices;