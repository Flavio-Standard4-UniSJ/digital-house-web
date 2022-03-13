const database = require('../database/models/');

const LegendariesService = {
    listLegendaries: async () => {
        const resultados = await database.legendary.findAll();
        return resultados;
    },
    pokemonDados: async (id) => {
        const pokemon = await database.legendary.findOne({
            where: {
                id
            }
        });
        console.log('---------- services ---------');
        console.log(pokemon);
        return pokemon;
    },
    createLegendary: async ({
        name,
        description,
        type,
        healthPoints,
        specialAttack,
        defense,
        attack,
        experience,
        specialDefense,
        url})=> {
           const resultado = await database.legendary.create({
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
           }) 
           return resultado;
    },
    updatedLegendary: (
        id,
        name, 
        description, 
        type, 
        healthPoints, 
        specialAttack, 
        defense, 
        attack, 
        experience, 
        specialDefense,
        url)=>{
            const resultado = database.legendary.update({
                name, 
                description, 
                type, 
                healthPoints, 
                specialAttack, 
                defense, 
                attack, 
                experience, 
                specialDefense,
                url},{
                    where: {
                        id
                    }
                });
            return resultado;
        }
}

module.exports = LegendariesService;