const { body } = require('express-validator');

const validatorList = [
    body('nome', 'Informe o nome do treinador!').notEmpty(),
    body('email', 'Necessário informar o e-mail!').notEmpty().bail().isEmail(),
    body('senha','A senha deve conter pelo menos 6 caracteres!').isLength({ min: 6 })
]
module.exports = validatorList;