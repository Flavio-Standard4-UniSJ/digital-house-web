const multer = require('multer');

const LegendariesService = require('../services/LegendariesService');

const storage = require('../config/multer');

var upload = multer().array('foto');

const controller = {
    index: async (req, res) => {
        const legendary = await LegendariesService.listLegendaries(); 
        return res.render('legendaries', { legendary});
    },
    legendaryById: async (req, res) => {
        const { id } = req.params;
        const pokemon = await LegendariesService.pokemonDados(id);
        return res.render('legendaries', { pokemon});
    },
    viewform: (req,res) => {
        return res.render('newLegendary');
    },
    create: async (req, res) => {  
        //const avatar = req.file
        const url = req.file.filename;
        const { 
            name, 
            description, 
            type, 
            healthPoints, 
            specialAttack, 
            defense, 
            attack, 
            experience, 
            specialDefense
        } = req.body;
        const legendary = await LegendariesService.createLegendary({
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
        return res.render('newLegendary', {legendary});
    },
    update: (req, res) => {     
        //const avatar = req.file
        const url = req.file.filename;
        const { id } = req.params;
        const { 
            name, 
            description, 
            type, 
            healthPoints, 
            specialAttack, 
            defense, 
            attack, 
            experience, 
            specialDefense
        } = req.body;
        const updated = LegendariesService.updatedLegendary(
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
            url);
        return res.json(updated);      
    }
}

module.exports = controller;