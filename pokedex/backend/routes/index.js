const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/pokedex', function(req, res, next) {
  res.render('pokedex', { title: 'Express' });
});

router.get('/documentation', function(req, res, next) {
  res.render('documentation', { title: 'Express' });
});

module.exports = router;
