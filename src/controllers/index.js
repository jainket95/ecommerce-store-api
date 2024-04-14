const { getDummyProducts } = require("../utils");
let orders = [];

let initialCart = {
	items: [],
	totalPrice: 0,
	totalQuantity: 0,
	totalDiscount: 0,
	total: 0,
};
let cart = initialCart;
let products = [];

getDummyProducts().then((data) => {
	products = data;
});

module.exports = {
	getProducts: function (req, res) {
		try {
			return res.json(products);
		} catch (error) {
			console.error(error);
			return res.sendStatus(400);
		}
	},
	addProductToCart: async function (req, res) {
		try {
			let { id } = req.body;
			console.log(id);
			let product = products.find((product) => product.id === id);
			cart.items.push(...product);
			cart.totalPrice += product.price;
			cart.totalQuantity += 1;
			cart.total += cart.totalPrice;
			return res.json(cart);
		} catch (error) {
			console.error(error);
			return res.sendStatus(400);
		}
	},

};
