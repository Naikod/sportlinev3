const { PaymentCode, Product, Transaction } = require("../models/main.model");
const mongoose = require('mongoose');
const Chiperline = require("chiperline");
const chiper = new Chiperline("secretkeysportlinev3");


exports.confirmPayment = async (req, res) => {
  try {
    const checkPayment = await PaymentCode.findOne({id: req.body.id});
    if(checkPayment.paid=="Pending" && checkPayment.isExpire!=true){
      const confirmPayment = await PaymentCode.findOneAndUpdate(
        { id: req.body.id },
        { paid: "Done", isExpire: true },
        { new: true } // Return the updated document
      );
      const ids = new mongoose.Types.ObjectId(req.body._id)
      const dataTransaction = await Transaction.findOne({paymentID: ids}).populate("productID.Product")
      const newStock = dataTransaction.productID.Product.stock - dataTransaction.productID.Amount
      const newData = await Product.findByIdAndUpdate({_id: new mongoose.Types.ObjectId(dataTransaction.productID.Product._id)}, {stock: newStock}, {new: true})
      res.status(200).json({ success: true, data: confirmPayment });
    } else {
      res.status(500).json({ success: false, message: "Payment already Paid / Expire" });
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message });
  }
};

// Get Payment Status
exports.getPaymentStatus = async (req, res) => {
  try {
    const getPaymentStatus = await PaymentCode.find({ id: req.params.id });
    res.status(200).json(getPaymentStatus);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
      return res.status(404).json({ message: "Payment code not found" });
    }
    res.status(200).json(paymentCode);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new payment code
exports.createPaymentCode = async (req, res) => {
  // id: { type: String, required: true },
  // total: { type: Number, required: true },
  // isExpire: { type: Boolean, default: false },
  // createdAt: { type: Date, default: Date.now }
  try {
    const now = new Date();
  // Calculate the expire date and time (15 minutes from now)
    const expireTime = new Date(now.getTime() + 15 * 60000);
    const data = {
      id: chiper.generateUUID(),
      total: req.body.total,
      expireAt: expireTime
    };
    const newPaymentCode = await PaymentCode.create(data);
    res.status(201).json(newPaymentCode);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a payment code by ID
exports.updatePaymentCode = async (req, res) => {
  try {
    const updatedPaymentCode = await PaymentCode.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedPaymentCode == null) {
      return res.status(404).json({ message: "Payment code not found" });
    }
    res.status(200).json(updatedPaymentCode);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a payment code by ID
exports.deletePaymentCode = async (req, res) => {
  try {
    const deletedPaymentCode = await PaymentCode.findByIdAndDelete(
      req.params.id
    );
    if (deletedPaymentCode == null) {
      return res.status(404).json({ message: "Payment code not found" });
    }
    res.status(200).json({ message: "Payment code deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
