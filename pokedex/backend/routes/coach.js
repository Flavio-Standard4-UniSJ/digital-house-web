const express = require('express');
const multer = require('multer');

const controller = require('../controllers/CoachController');
const storage = require('../config/multer');
const validaCoach = require('../middlewares/validaCoach');

const router = express.Router();

const upload = multer({storage: storage});

/* GET users listing. */
router.get('/', controller.index);
router.get('/login', controller.viewlogin);
router.post('/dashboard', controller.login);
router.get('/:id', controller.viewformedit); //localhost:8000/coach/10 - formulario  
router.post('/',  upload.array('perfil'), validaCoach, controller.create);
router.put('/',  upload.array('perfil'), validaCoach, controller.update); //localhost:8000/pokedex/

module.exports = router;
