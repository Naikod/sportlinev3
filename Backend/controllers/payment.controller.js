const PaymentCode = require('../models/main.model');

// Get all payment codes
exports.getAllPaymentCodes = async (req, res) => {
    try {
        const paymentCodes = await PaymentCode.find();
        res.status(200).json(paymentCodes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a payment code by ID
exports.getPaymentCodeById = async (req, res) => {
    try {
        const paymentCode = await PaymentCode.findById(req.params.id);
        if (paymentCode == null) {
            return res.status(404).json({ message: 'Payment code not found' });
        }
        res.status(200).json(paymentCode);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new payment code
exports.createPaymentCode = async (req, res) => {
    const paymentCode = new PaymentCode(req.body);
    try {
        const newPaymentCode = await paymentCode.save();
        res.status(201).json(newPaymentCode);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a payment code by ID
exports.updatePaymentCode = async (req, res) => {
    try {
        const updatedPaymentCode = await PaymentCode.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedPaymentCode == null) {
            return res.status(404).json({ message: 'Payment code not found' });
        }
        res.status(200).json(updatedPaymentCode);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a payment code by ID
exports.deletePaymentCode = async (req, res) => {
    try {
        const deletedPaymentCode = await PaymentCode.findByIdAndDelete(req.params.id);
        if (deletedPaymentCode == null) {
            return res.status(404).json({ message: 'Payment code not found' });
        }
        res.status(200).json({ message: 'Payment code deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
