const express = require('express');
const router = express.Router();
const controller = require('../controllers/LegendariesController');

/* GET legendaries. */
router.get('/', controller.index);
router.get('/:id', controller.indexLegendary);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete("/:id", controller.excluir);

module.exports = router;
