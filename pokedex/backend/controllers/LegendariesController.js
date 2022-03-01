const multer = require('multer');
const LegendariesService = require('../services/LegendariesService');

const storage = require('../config/multer');

var upload = multer().array('foto');

const controller = {
    index: async (req, res) => {
        const legendary = await LegendariesService.listLegendaries(); 
        return res.render('legendaries', { legendary});
    },
    legendary: async (req, res) => {
        const { name } = req.params;
        const pokemon = await LegendariesService.pokemonDados(name);
        return res.json({ pokemon});
    },
    viewform: (req,res) => {
        return res.render('newLegendary');
    },
    create: async (req, res) => {        
        const foto = req.file;
        const { 
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
        } = req.body;
        console.log({name, 
            description, 
            type, 
            healthPoints, 
            specialAttack, 
            defense, 
            attack, 
            experience, 
            specialDefense,
            url})
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
            specialDefense);
        return res.json();      
    }
}

module.exports = controller;