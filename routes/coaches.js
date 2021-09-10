const express = require('express');

const controller = require('../controllers/CoachesController');

const router = express.Router();

// CRUD Legendaries
router.get('/', controller.index);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;
