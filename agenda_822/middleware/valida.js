const { check, body, validationResult } = require('express-validator');

const fs = require('fs');
const path = require('path');

const valida_cadastro=[
    check('nome', 'Informe seu nome').notEmpty(),
    check('telefone', 'Informe seu número de telefone').notEmpty().isMobilePhone('pt-BR'),
    check('email', 'Informe seu email').notEmpty().isEmail(),
    check('senha', 'Informe sua senha').notEmpty(),
    check('cpf', 'o cpf deve ter 11 números inteiros').isLength({ max: 11 }),
    (req, res, next) => {
        let errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json(errors);
        } else {
            next();
        }
    } 
]
module.exports = {"valida_cadastro" : valida_cadastro}