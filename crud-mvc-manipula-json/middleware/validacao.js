const { body } = require('express-validator');
//documentação: www.npmjs.com/package/express-validator
//npm install express-validator --save
const validatorList = [
    body('username', 'nome de usuário é obrigatório!').notEmpty(),
    body('email', 'e-mail é necessário!').notEmpty().bail().isEmail(),
    body('senha','a senha deve conter pelo menos 6 caracteres').isLength({ min: 6 })
]
module.exports = validatorList;
