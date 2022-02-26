const database = require('../database/models/');

const LegendariesService = {
    listLegendaries: () => {
        
    },
    listPokemonData: (pokemonName) => {
        const pokemonList = LegendariesService.listLegendaries(); 
        let pokemon = pokemonList.find(item => item.name === pokemonName);

        if (!pokemon) {
            pokemon = pokemonList[0];
        }

        return pokemon;
    },
    createLegendary: (
        name,
        description,
        type,
        healthPoints,
        specialAttack,
        defense,
        attack,
        experience,
        specialDefense,
        urlFoto)=> {
            
    }
}

module.exports = LegendariesService;