const express = require('express');
const router = express.Router();
const clientesController = require('../Controller/clientesController');

router.get('/', clientesController.list);
router.post('/', clientesController.save);
router.delete('/:id_cliente', clientesController.delete);
router.get('/:id_cliente', clientesController.edit);
router.post('/:id_cliente', clientesController.update);

module.exports = router;