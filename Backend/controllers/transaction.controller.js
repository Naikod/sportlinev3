const {Transaction, PaymentCode} = require('../models/main.model');

// Get all transactions
exports.getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find().populate('productID.Product').populate('accountID').populate('paymentID');
        res.status(200).json(transactions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.statisticSelling = async (req, res) => {
    try {
        const productSales = await Transaction.aggregate([
            {
                $group: {
                    _id: "$productID.Product",
                    totalAmountSold: { $sum: "$productID.Amount" }
                }
            },
            {
                $lookup: {
                    from: "products",
                    localField: "_id",
                    foreignField: "_id",
                    as: "productDetails"
                }
            },
            {
                $unwind: "$productDetails"
            },
            {
                $project: {
                    _id: "$productDetails._id",
                    name: "$productDetails.name",
                    totalAmountSold: 1
                }
            }
        ]);

        // Aggregate total revenue
        const totalRevenue = await PaymentCode.aggregate([
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: "$total" }
                }
            }
        ]);

        res.status(200).json({
            productSales,
            totalRevenue: totalRevenue[0] ? totalRevenue[0].totalRevenue : 0
        })
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}
// Get a transaction by ID
exports.getTransactionById = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id).populate('productID.Product').populate('accountID').populate('paymentID');
        if (transaction == null) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.status(200).json(transaction);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new transaction
exports.createTransaction = async (req, res) => {
    const transaction = new Transaction(req.body);
    try {
        const newTransaction = await transaction.save();
        res.status(201).json(newTransaction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a transaction by ID
exports.updateTransaction = async (req, res) => {
    try {
        const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedTransaction == null) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.status(200).json(updatedTransaction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a transaction by ID
exports.deleteTransaction = async (req, res) => {
    try {
        const deletedTransaction = await Transaction.findByIdAndDelete(req.params.id);
        if (deletedTransaction == null) {
            return res.status(404).json({ message: 'Transaction not found' });
        }
        res.status(200).json({ message: 'Transaction deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
