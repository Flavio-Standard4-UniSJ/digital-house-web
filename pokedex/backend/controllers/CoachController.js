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
    viewformedit: async (req, res, next)=>{
        const {id}=req.params;
        const retorno = await CoachService.search(id);
        return res.render('editar', { coach: retorno });
    },
    create: async (req, res, next) => {
        let errors = validationResult(req);
        
        if(!errors.isEmpty()){
            return res.status(400).json(errors);
        }
        const perfil = req.file;
        console.log({perfil});
        const { nome, email, senha } = req.body;
        
        const hash = await bcrypt.hashSync(senha, salt);
        const coach = await CoachService.create({ nome, email, hash });
        
        return res.render('newCoach', { coach });
    },
    update: async (req, res, next)=>{
        const perfil = req.file;
        console.log(perfil);

        const { id, nome, email, senha  } = req.body;
        const updated = await CoachService.updatedCoach(id, nome, email, senha );
        return res.render('editar', {coach: updated});
    },
    viewlogin: (req,res)=>{
        return res.render('login');
    },
    login: async (req, res, next)=>{
        const { email, senha } = req.body;
        const hash = await bcrypt.hashSync(senha, salt);
        bcrypt.compareSync(senha, hash);
        const resultado = await CoachService.logado(email, senha);
        if(resultado===undefined){
            return res.status(403).render('login');
        }else{
            return res.render('dashboard', { coach: resultado });
        }
    }
}

module.exports = controller;