const { Product } = require("../models/product.model");

module.exports.index = (req, res) => {
	res.json({ message: "Hello Product Manager" });
};

module.exports.findAllProducts = (req, res) => {
	Product.find()
		.then((allTheProducts) => {
			res.json({ results: allTheProducts });
		})
		.catch((err) =>
			res.json({ message: "Something went wrong...", error: err })
		);
};

module.exports.createProduct = (req, res) => {
	const { title, price, description } = req.body;
	Product.create({ title, price, description })
		.then((product) => res.json(product))
		.catch((err) => res.json(err));
};
