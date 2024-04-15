const { getDummyProducts, resetCart } = require("../utils");

let orders = [];

let initialCart = {
	items: [],
	totalPrice: 0,
	totalQuantity: 0,
	totalDiscount: 0,
	total: 0,
};
let cart = resetCart(initialCart);
let products = [];

let discounts = [];

getDummyProducts().then((data) => {
	products = data;
});

module.exports = {
	getProducts: function (req, res) {
		try {
			return res.json({ data: products, isSuccess: true });
		} catch (error) {
			console.error(error);
			return res.sendStatus(400);
		}
	},
	getCart: function (req, res) {
		try {
			return res.json({ data: cart, isSuccess: true });
		} catch (error) {
			console.error(error);
			return res.sendStatus(400);
		}
	},
	getDiscounts: function (req, res) {
		try {
			return res.json({ data: discounts, isSuccess: true });
		} catch (error) {
			console.error(error);
			return res.sendStatus(400);
		}
	},
	addProductToCart: function (req, res) {
		try {
			let { id } = req.body;

			let product = products.find((product) => product.id === id);

			cart.items.push(product);
			cart.totalPrice += product.price;
			cart.totalQuantity += 1;
			cart.total = cart.totalPrice;

			return res.json({ data: cart, isSuccess: true });
		} catch (error) {
			console.error(error);
			return res.sendStatus(400);
		}
	},
	cartCheckout: function (req, res) {
		try {
			let { id } = req.body;

			orders.push({ id, ...cart });
			cart = { ...resetCart(initialCart) };

			return res.json({ data: orders, isSuccess: true });
		} catch (error) {
			console.error(error);
			return res.sendStatus(400);
		}
	},
	generateDiscount: function (req, res) {
		try {
			let { discount } = req.body;
			discounts.push(discount);
			return res.json({ data: discounts, isSuccess: true });
		} catch (error) {
			console.error(error);
			return res.sendStatus(400);
		}
	},
	validateDiscount: function (req, res) {
		try {
			let { discountCode } = req.body;

			let nextOrderIndex = orders.length + 1;

			let discount = discounts.find(
				(discount) =>
					discount.index === nextOrderIndex && discount.code === discountCode
			);

			if (discount && discount.id && discount.code) {
				cart.totalDiscount = (cart.totalPrice * discount.value) / 100;
				cart.total = cart.totalPrice - cart.totalDiscount;

				cart = { ...cart, discount };

				return res.json({ isSuccess: true, message: "discount code applied" });
			} else {
				return res.json({
					isSuccess: false,
					message: "Try with a different discount code",
				});
			}
		} catch (error) {
			console.error(error);
			return res.sendStatus(400);
		}
	},
	getAdminStoreDetails: function (req, res) {
		try {
			const adminOrderDetails = orders.reduce(
				(total, order) => {
					total.itemsQuantity += order.totalQuantity;
					total.purchaseAmount += order.totalPrice;
					total.discountAmount += order.totalDiscount;
					if (order.discount) total.discounts.push(order.discount);

					return total;
				},
				{
					itemsQuantity: 0,
					purchaseAmount: 0,
					discountAmount: 0,
					discounts: [],
				}
			);
			if (
				!(
					adminOrderDetails.itemsQuantity ||
					adminOrderDetails.discountAmount ||
					adminOrderDetails.discount
				)
			) {
				res.json({
					isSuccess: true,
					data: { data: adminOrderDetails, isDataAvailable: false },
				});
			} else {
				res.json({
					isSuccess: true,
					data: { data: adminOrderDetails, isDataAvailable: true },
				});
			}
		} catch (error) {
			console.error(error);
			return res.sendStatus(400);
		}
	},
};
