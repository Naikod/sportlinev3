const { Account } = require("../models/main.model");
const Chiperline = require("chiperline");
const chiper = new Chiperline("SUPERSECRETSPORTLINEV3");

//Login Auth
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await Account.findOne({ email });
    if (!user) {
      return res.json({ status: "Failed", message: "Email was not found!" });
    }
    const isPasswordValid = chiper.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({ status: "Failed", message: "Password Invalid" });
    }
    res.json({ status: "Success", user });
  } catch (err) {
    console.error("Error logging in:", err);
    res.json({ message: "Internal server error" });
  }
};

// Get all accounts
exports.getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.status(200).json(accounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get an account by ID
exports.getAccountById = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (account == null) {
      return res.status(404).json({ message: "Account not found" });
    }
    res.status(200).json(account);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new account
exports.createAccount = async (req, res) => {
  try {
    req.body.password = chiper.encrypt(req.body.chiper)
    const newAccount = await Account.create(req.body);
    res.status(201).json({ created: true });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an account by ID
exports.updateAccount = async (req, res) => {
  try {
    const updatedAccount = await Account.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (updatedAccount == null) {
      return res.status(404).json({ message: "Account not found" });
    }
    res.status(200).json(updatedAccount);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an account by ID
exports.deleteAccount = async (req, res) => {
  try {
    const deletedAccount = await Account.findByIdAndDelete(req.params.id);
    if (deletedAccount == null) {
      return res.status(404).json({ message: "Account not found" });
    }
    res.status(200).json({ message: "Account deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
