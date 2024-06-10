const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const productRoutes = require('./routes/product.route');
const accountRoutes = require('./routes/account.route');
const transactionRoutes = require('./routes/transaction.route');
const paymentCodeRoutes = require('./routes/payment.route');
const emailRoutes = require('./routes/email.route')

// Middleware to parse JSON
app.use(cors());
app.use(bodyParser.json()); 

// Routes
app.use('/products', productRoutes);
app.use('/accounts', accountRoutes);
app.use('/transactions', transactionRoutes);
app.use('/payment', paymentCodeRoutes);
app.use('/email', emailRoutes)

// Database connection
mongoose.connect('PASTE-THE-DATABASE-URL', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});