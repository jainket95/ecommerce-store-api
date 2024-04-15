const {
	getProducts,
	addProductToCart,
	cartCheckout,
	generateDiscount,
	getCart,
	validateDiscount,
	getAdminStoreDetails,
} = require("../controllers");
const express = require("express");

const router = express.Router();

router.get("/products", getProducts);
router.get("/getCart", getCart);
router.post("/addProductToCart", addProductToCart);
router.post("/cartCheckout", cartCheckout);
router.post("/generateDiscount", generateDiscount);
router.post("/validateDiscount", validateDiscount);
router.get("/getAdminStoreDetails", getAdminStoreDetails);

module.exports = router;
