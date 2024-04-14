const { getProducts, addProductToCart } = require("../controllers");
const express = require("express");

const router = express.Router();

router.get("/products", getProducts);
router.get("/addProductToCart", addProductToCart);

module.exports = router;
