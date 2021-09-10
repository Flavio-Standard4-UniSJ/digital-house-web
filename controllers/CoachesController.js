const  bcrypt = require('bcrypt');
const CoachesService = require('../services/CoachesService');
const database = require('../database/models');

// MVCS - MODEL / VIEW / CONTROLLER / SERVICE

// PAREDE = VIEW
// CONTROLLER = PEDREIRO / Mestre de obras
// SERVICE = SERVENTE DO PEDREIRO
// MODEL = CIMENTO / TIJOLO

// VIEW = LAYOUT / DESENHO
// CONTROLLER = ARTICULADOR / MEIO DE CAMPO / INTERMEDIADOR
// SERVICE = 
// MODEL = INFORMAÇÃO

const controller = {  
    index: (req, res) => {
        return res.render('coaches');
    },
    /*
    indexById: async (req, res) => {
        const { id } = req.params;
        const legendary = await LegendariesService.getById(id);

        if (!legendary) {
            return res.status(404).json({error: `Legendary ${id} not found`})
        }

        return res.json(legendary);
    },
    indexByIdAndAttribute: async (req, res) => {
        const { id, attribute } = req.params;
        
        const legendary = await LegendariesService.getAttributeById(id, attribute);

        if (!legendary) {
            return res.status(404).json({error: `Legendary ${id} not found`})
        }
        
        return res.json(legendary);
    },
    indexAll: async (req, res) => {
        const list = await LegendariesService.getLegendaryList();
        return res.json(list);
    },

    */

    login: async (req, res) => {
        const { email, senha } = req.body;
        const coachLogado = await CoachesService.sessao(email, senha);

        if(coachLogado){
            return res.render('dashboard', { email, senha_hash });
        }else{
            return res.render('login');
        }

    },
    create: async (req, res) => {
        const { 
            name, 
            email,
            senha,
            pin
        } = req.body;
        senha_hash=bcrypt.hashSync(senha, 10),
        pin_hash=bcrypt.hashSync(pin, 10)

        const coach = await CoachesService.createCoach(
            name, 
            email,
            senha_hash,
            pin_hash
        );
        console.log(senha_hash);
        console.log(pin_hash);
        console.log(coach);
        return res.json(coach);
    },
    update: async (req, res) => { 
        const { id } = req.params;
        
        const { 
            name, 
            email,
            senha,
            pin
        } = req.body;
        senha_hash=bcrypt.hash(senha, 10);
        const updatedCoach = await CoachesService.updateCoach(
            id, 
            name, 
            email,
            senha_hash,
            pin
        );

        res.json(updatedCoach);       
    },
    destroy: async (req, res) => {
        const { id } = req.params;

        const removeCoach = await CoachesService.destroyCoach(id);

        return res.json(removeCoach);
    }
}

module.exports = controller;