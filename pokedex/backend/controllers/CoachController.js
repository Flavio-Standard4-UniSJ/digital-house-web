const multer = require('multer');
const { validationResult } = require('express-validator');
const CoachService = require('../services/CoachService');

const storage = require('../config/multer');

var upload = multer().array('foto');

const controller = {
    index: function(req, res, next) {
      return res.render('pokedex', { title: 'Express' });
    },
    create: async (req, res, next) => {
        let errors = validationResult(req);
        
        if(!errors.isEmpty()){
            return res.status(400).json(errors);
        }

        const foto = req.file;
        const { nome, email, senha } = req.body;
        
        console.log({ nome, email, senha });
        
        const coach = await CoachService.create({ nome, email, senha });
        
        return res.render('pokedex', { title: 'Express', coach });
    }
}

module.exports = controller;