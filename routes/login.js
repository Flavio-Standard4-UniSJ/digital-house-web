const express = require('express');
const router = express.Router();
const controller = require('../controllers/CoachesController');

// MVC = MODEL / VIEW / CONTROLLER

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
 

router.post('/', controller.login)

// router.get('/legendaries')

module.exports = router;
