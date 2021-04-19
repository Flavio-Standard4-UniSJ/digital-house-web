const LegendaryModel = require('../models/LegendaryModel');
const legendaries = './legendaries.json';
const fs = require('fs');
const path = require('path');

const { v4: uuidv4 } = require('uuid');
const id = uuidv4();

const LegendariesService = {
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
        urlFoto
    )=>{
    const newLegendaries = new LegendaryModel(
        //uuidv4(),
        undefined,
        name,
        description,
        type,
        healthPoints,
        specialAttack,
        defense,
        attack,
        experience,
        specialDefense,
        urlFoto
    )   
    return newLegendaries; 
    },
    listLegendaries: () => {
        fs.readFile(legendaries, 'utf8', function (err, data) {
			if (err) {
				return console.log(err);
			}
			const listaLegendaries = JSON.parse(data);
			console.log(listaLegendaries);
			const newLegendariesString = JSON.stringify(listaLegendaries, null, 2);
			console.log(newLegendariesString);
		});
        return listaLegendaries;
    },
    listPokemonData: (pokemonName) => {
        const pokemonList = LegendariesService.listLegendaries(); 
        let pokemon = pokemonList.find(item => item.name === pokemonName);

        if (!pokemon) {
            pokemon = pokemonList[0];
        }

        return pokemon;
    }
}//legendarieService

module.exports = LegendariesService;