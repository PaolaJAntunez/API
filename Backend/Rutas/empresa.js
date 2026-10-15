const express = require('express');
const router = express.Router();
const empresaController = require('../Controller/empresaController');

router.get('/', empresaController.list);
router.post('/', empresaController.save);
router.delete('/:cempresa', empresaController.delete);
router.get('/:cempresa', empresaController.edit);
router.post('/:cempresa', empresaController.update);

module.exports = router;