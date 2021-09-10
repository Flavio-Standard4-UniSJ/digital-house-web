const database = require('../database/models/index');

const LegendariesService = {    
    createLegendary: async (
        name, 
        description, 
        type, 
        healthPoints, 
        specialAttack, 
        defense, 
        attack, 
        experience, 
        specialDefense,
        url
        ) => {      
        const newLegendary = await database.Legendary.create({
            name, 
            description, 
            type, 
            healthPoints, 
            specialAttack, 
            defense, 
            attack, 
            experience, 
            specialDefense,
            url
        });     
        return newLegendary;   
    },
    updateLegendary: async ( 
        id, 
        name, 
        description, 
        type, 
        healthPoints, 
        specialAttack, 
        defense, 
        attack, 
        experience,
        specialDefense, url) => {
        const updatedLegendary = await database.Legendary.update({
            name, 
            description, 
            type, 
            healthPoints, 
            specialAttack, 
            defense, 
            attack, 
            experience, 
            specialDefense,
            url
        }, {
            where: {
                id                
            }
        });     

        return updatedLegendary;  
    },
    destroyLegendary: async(id) => {
        const destroyedLegendary = await database.Legendary.destroy({
            where: { 
                id
            }
        });
        return destroyedLegendary;
    }
}

module.exports = LegendariesService;