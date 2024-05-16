const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const productRoutes = require('./routes/product.route');
const accountRoutes = require('./routes/account.route');
const transactionRoutes = require('./routes/transaction.route');
const paymentCodeRoutes = require('./routes/payment.route');

// Middleware to parse JSON
app.use(cors());
app.use(bodyParser.json()); 
app.use(express.json());

// Routes
app.use('/products', productRoutes);
app.use('/accounts', accountRoutes);
app.use('/transactions', transactionRoutes);
app.use('/payment-codes', paymentCodeRoutes);

// Database connection
mongoose.connect('mongodb+srv://Waans:waansdb@waansdb.ic1paxa.mongodb.net/?retryWrites=true&w=majority&appName=WaansDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});