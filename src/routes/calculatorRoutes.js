const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorControllers');

router.post('/add', calculatorController.add);
router.post('/subtract', calculatorController.subtract);
router.post('/multiply', calculatorController.multiply);
router.post('/divide', calculatorController.divide);
router.get('/result', calculatorController.outputResult);

module.exports = router;