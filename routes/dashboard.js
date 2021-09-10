const express = require('express');
const router = express.Router();


// MVC = MODEL / VIEW / CONTROLLER

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.cookies);
  res.render('dashboard', { title: 'Express', darkMode: req.session.darkMode });
});

// router.get('/legendaries')

module.exports = router;
