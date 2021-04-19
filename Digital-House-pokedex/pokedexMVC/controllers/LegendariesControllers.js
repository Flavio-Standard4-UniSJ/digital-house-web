const LegendaryModel = require('../models/LegendaryModel');

const controller = {
    index: (req, res) => {
        const pineco = new LegendaryModel("1", "Pineco", "pineco é o preferido do professor", "bug");
        const pikachu = new LegendaryModel("2", "Pikachu", "pkachu é o segundo melhor", "electry");
        const kanto = new LegendaryModel("3", "kanto", "Pokédex régional de Kanto dans Rouge/Bleu/Jaune", "musico");
        const mewtwo = new LegendaryModel("4", "MewTwo", "Pokédex ave de fogo", "fire")
        //res.json([pineco, pikachu, kanto]);
        return res.send([pineco, pikachu, kanto, mewtwo]);
    }
}

module.exports = controller