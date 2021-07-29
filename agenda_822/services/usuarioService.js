const database = require('../database/models/');
const { Op } = require('sequelize')

const usuarioService = {
    newUser: async (
        id, 
        nome, 
        cpf, 
        data_nascimento, 
        telefone, 
        email, 
        senha, 
        pin, 
        endereco, 
        profissao, 
        salario, 
        avatar
    )=>{
        const novoUsuario =  await database.Usuario.create({
            id, 
            nome, 
            cpf, 
            data_nascimento, 
            telefone, 
            email, 
            senha, 
            pin, 
            endereco, 
            profissao, 
            salario, 
            avatar
        })
        return novoUsuario
    }
}
module.exports = usuarioService