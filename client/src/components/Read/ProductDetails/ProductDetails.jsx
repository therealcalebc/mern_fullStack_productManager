const ProductDetails = (props) => {
	console.log("ProductDetails.props:");
	console.log(props);
	const { title, price, description } = props.details;
	return (
		<div>
			<h2>{title}</h2>
			<h3>{price}</h3>
			<p>{description}</p>
		</div>
	);
};

export default ProductDetails;
