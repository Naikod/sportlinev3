const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

const multer = require("multer")
const fs = require("fs")
const path = require("path")
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../../public/product_image");
  },
  filename: (req, file, cb) => {
    cb(null, "product_image-" + Date.now() + path.extname(file.originalname));
  },
});

let upload = multer({ storage: storage });

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', upload.single("images"), productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
