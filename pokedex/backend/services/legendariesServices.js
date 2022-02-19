const LegendaryModel = require("../models/LegendaryModel");

const legendaries = {
    listaLegendaries: () =>{
        const pineco = new LegendaryModel(1, 'Pineco', "melhor legendary que existe", 'bug');
        const pikachu = new LegendaryModel(1, 'Pikachu', "segundo melhor legendary que existe", 'electric');
        return [pineco, pikachu];
    }
}

module.exports = legendaries;