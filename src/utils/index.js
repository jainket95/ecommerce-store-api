const getDummyProducts = async () => {
	const response = await fetch("https://dummyjson.com/products");
	const data = await response.json();
	const products = data.products.map((item) => ({
		id: item.id,
		title: item.title,
		images: item.images,
		price: item.price,
		thumbnail: item.thumbnail,
		description: item.description,
	}));

	return products;
};

const deepCopy = (obj) => {
	return JSON.parse(JSON.stringify(Object.assign({}, obj)));
};

module.exports = {
	getDummyProducts,
	deepCopy,
};
