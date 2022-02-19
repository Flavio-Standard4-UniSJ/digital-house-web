
const LegendaryModel = require('../models/LegendaryModel');
const { v4: uuidv4 } = require('uuid');

const LegendariesService = {
    listLegendaries: () => {
        const mewTwo = new LegendaryModel(
            1, 
            'MewTwo', 
            "Its DNA is almost the same as Mew's. However, its size and disposition are vastly different.",
            'Psychic',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            'images/mew.svg');    
        const moltres =  new LegendaryModel(
            2, 
            'Moltres', 
            "It’s one of the legendary bird Pokémon. When Moltres flaps its flaming wings, they glimmer with a dazzling red glow.",
            'Flame',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            'images/moltres.svg');
        const pikachu =  new LegendaryModel(
            3, 
            'Pikachu', 
            "Pikachu is an Electric-type Pokémon in the Pokémon franchise",
            'Electric',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            'images/pikachu.svg');
        const xerneas =  new LegendaryModel(
            4, 
            'Xerneas', 
            "Xerneas is an Fire-type Pokémon in the Pokémon",
            'Fire',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            'images/xerneas.svg');
        const zapdos =  new LegendaryModel(
            5, 
            'Zapdos', 
            "Zapdos is an Psic-type Pokémon in the Pokémon",
            'Psic',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            'images/zapdos.svg');    
        const diance =  new LegendaryModel(
            6, 
            'Diance', 
            "Diance is an Psic-type Pokémon in the Pokémon",
            'Psic',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            'images/diance.svg');         
        const articuno =  new LegendaryModel(
            7, 
            'Articuno', 
            "Articuno is an Fire-type Pokémon in the Pokémon",
            'Fire',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            '1000,000',
            'images/articuno.svg'); 
        return [mewTwo, moltres, pikachu, xerneas, zapdos, diance, articuno];
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
            const newLegendary = new LegendaryModel(
                uuidv4(),
                name,
                description,
                type,
                healthPoints,
                specialAttack,
                defense,
                attack,
                experience,
                specialDefense,
                urlFoto);
        return newLegendary;
    }
}

module.exports = LegendariesService;