const bcrypt = require('bcrypt');
const database = require('../database/models/index');

const CoachesService = {    
    createCoach: async (
        name, 
        email,
        senha,
        pin
        ) => {      
        const newCoach = await database.Coach.create({
            name, 
            email,
            senha,
            pin
        });   
        console.log(newCoach);
        return newCoach;   
    },
    getList: async () => {        
        const resultados = await database.Coach.findAll(); 
        // const resultados = await database.sequelize.query("select * from legendaries", {
        //     type: database.Sequelize.QueryTypes.SELECT,
        // });
        return resultados;       
    },
    updateCoach: async ( 
        id, 
        name, 
        email,
        senha,
        pin) => {
        const updatedCoach = await database.Coach.update({
            name, 
            email,
            senha,
            pin
        }, {
            where: {
                id                
            }
        });   
        return updatedCoach;  
    },
    destroyCoach: async(id) => {
        const removeCoach = await database.Coach.destroy({
            where: { 
                id
            }
        });
        return removeCoach;
    },
    getById: async (id) => {
        return await database.Coach.findByPk(id);
    },
    getAttributeById: async (id, attribute) => {
        return await database.Coach.findByPk(id, {
            attributes: [attribute]
        });
    },
    sessao: async (email, senha) => {       
        const coachLogado = await database.Coach.findAll({
            where: {
                email: email,
                senha: senha
            }
        })
        if(bcrypt.compareSync(senha, coachLogado.senha)){
            return coachLogado;
        }//comparar senha do bd com o hash da senha digitada no formulario
        
        return        
    }
}

module.exports = CoachesService;