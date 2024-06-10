const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define Product Schema
const productSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: [{type: String}],
    stock: { type: Number },
    images: { type: String, required: true },
    rating: [{ type: Number }],
    createdAt: { type: Date, required: true, default: Date.now }
});

// Define Account Schema
const accountSchema = new Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['User', 'Admin'], default: 'User' },
    gender: { type: String, enum: ['M', 'W'], required: true },
    address: { type: String, default: "" },
    phoneNumber: { type: String, required: true },
    profilePicture: { type: String, default: "" },
    createdAt: { type: Date, required: true, default: Date.now }
});

// Define Transaction Schema
const transactionSchema = new Schema({
    productID: {
        Product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        Amount: { type: Number, required: true, default: "1"}
    },
    accountID: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
    paymentID: { type: Schema.Types.ObjectId, ref: 'PaymentCode', required: true },
    createdAt: { type: Date, default: Date.now }
});

// Define PaymentCode Schema
const paymentCodeSchema = new Schema({
    id: { type: String, required: true },
    total: { type: Number, required: true },
    paid: { type: String, enum: ["Pending", "Done"], default: 'Pending' },
    expireAt: { type: Date },
    createdAt: { type: Date, default: Date.now }
});

// Create Models
const Product = mongoose.model('Product', productSchema);
const Account = mongoose.model('Account', accountSchema);
const Transaction = mongoose.model('Transaction', transactionSchema);
const PaymentCode = mongoose.model('PaymentCode', paymentCodeSchema);

// Export Models
module.exports = {
    Product,
    Account,
    Transaction,
    PaymentCode
};
