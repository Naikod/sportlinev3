const express = require('express');
const router = express.Router();
const paymentCodeController = require('../controllers/payment.controller');

router.get('/', paymentCodeController.getAllPaymentCodes);
router.get('/:id', paymentCodeController.getPaymentCodeById);
router.post('/', paymentCodeController.createPaymentCode);
router.put('/:id', paymentCodeController.updatePaymentCode);
router.delete('/:id', paymentCodeController.deletePaymentCode);

module.exports = router;
