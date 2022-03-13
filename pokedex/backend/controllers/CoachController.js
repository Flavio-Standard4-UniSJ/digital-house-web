const multer = require('multer');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

const CoachService = require('../services/CoachService');
const storage = require('../config/multer');

const salt = bcrypt.genSaltSync(10);
var upload = multer().array('perfil');

const controller = {
    index: function(req, res, next) {
      return res.render('newCoach');
    },
    viewlogin: (req,res)=>{
        return res.render('login');
    },
    login: async (req, res, next)=>{
        const { email, senha } = req.body;
        const senhahash = await bcrypt.hashSync(senha, salt);
        bcrypt.compareSync(senha, senhahash);
        const resultado = await CoachService.logado(email, senha);
        if(!resultado){
            return res.status(403).render('login');
        }else{
            return res.render('dashboard', { coach: resultado });
        }
    },
    viewformedit: async (req, res, next)=>{
        const {id} = req.params;
        const retorno = await CoachService.search(id);
        return res.render('editar', { coach: retorno });
    },
    create: async (req, res, next) => {
        let errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors);
        }
        const { nome, email, senha } = req.body;
        const perfil = req.file.filename;
        const senhahash = await bcrypt.hashSync(senha, salt);
        const coach = await CoachService.create({ nome, email, senhahash, perfil });
        return res.render('newCoach', { coach });
    },
    update: async (req, res, next)=>{
        let errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors);
        }
        const perfil = req.file.filename;
        const { id, nome, email, senha  } = req.body;
        const senhahash = await bcrypt.hashSync(senha, salt);
        const updated = await CoachService.updatedCoach(id, nome, email, senhahash, perfil );
        return res.render('editar', {coach: updated});
    }
}

module.exports = controller;