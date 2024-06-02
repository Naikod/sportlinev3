const express = require("express");
const router = express.Router();
const accountController = require("../controllers/account.controller");

const multer = require("multer")
const fs = require("fs")
const path = require("path")
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/home/ridwan/Desktop/uklbosku/ukl-fullstack/public/image");
  },
  filename: (req, file, cb) => {
    cb(null, "cover-" + Date.now() + path.extname(file.originalname));
  },
});

let upload = multer({ storage: storage });

router.post('/login/auth', accountController.loginUser)
router.post("/register/", accountController.createAccount)
router.get("/", accountController.getAllAccounts);
router.get("/:id", accountController.getAccountById);
router.post("/", accountController.createAccount);
router.put("/:id", accountController.updateAccount);
router.delete("/:id", accountController.deleteAccount);

module.exports = router;
