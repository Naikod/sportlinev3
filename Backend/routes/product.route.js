const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "../../public/product_image/");
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, "product_image-" + Date.now() + path.extname(file.originalname));
  },
});

let upload = multer({ storage: storage });

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.post("/", upload.single("images"), productController.createProduct);
router.put("/:id", upload.single("images"), productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
