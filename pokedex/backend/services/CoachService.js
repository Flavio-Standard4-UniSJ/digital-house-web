
const { hash } = require('bcryptjs');
const bcrypt = require('bcryptjs');
const database = require('../database/models/');

const CoachService = {
    search: async (id)=>{
        const resultado = await database.coach.findOne({
            where: {
                id
            }
        });
        return resultado;
    },
    create: async ({ nome, email, hash }) => {
        const newcoach = await database.coach.create({ nome, email, senha:hash });
        return newcoach;
    },
    updatedCoach: async (
        id, 
        nome, 
        email, 
        senha ) => {
        const resultado = await database.coach.update({
            nome, 
            email, 
            senha },
        {
            where: {id}
        });
        return resultado;
    },
    logado: async (email, senha) => {
        const coach = await database.coach.findOne({
            where: {
                email
            }
        });
        if(!coach){
            return;
        }else{
            const senha_validada = await bcrypt.compare(senha,coach.senha);
            if(senha_validada){
                return coach;
            } 
        }
    }
}

module.exports = CoachService;