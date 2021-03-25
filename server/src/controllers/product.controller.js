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
			res
				.status(400)
				.json({ message: "Something went wrong...", error: err })
		);
};

module.exports.findOneProduct = (req, res) => {
	Product.findOne({ _id: req.params.id })
		.then((theProduct) => {
			res.json(theProduct);
		})
		.catch((err) =>
			res
				.status(400)
				.json({ message: "Something went wrong...", error: err })
		);
};

module.exports.updateProduct = (req, res) => {
	Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((updatedProduct) => {
			res.json(updatedProduct);
		})
		.catch((err) =>
			res
				.status(400)
				.json({ message: "Something went wrong...", error: err })
		);
};

module.exports.createProduct = (req, res) => {
	const { title, price, description } = req.body;
	Product.create({ title, price, description })
		.then((product) => res.json(product))
		.catch((err) => res.status(400).json(err));
};

module.exports.deleteProduct = (req, res) => {
	Product.deleteOne({ _id: req.params.id })
		.then((deleteConfirmation) => res.json(deleteConfirmation))
		.catch((err) => res.status(400).json(err));
};
