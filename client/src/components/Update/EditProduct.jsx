import Form from "./Form/Form";
import DeleteProductButton from "../Destroy/DeleteProductButton";

const EditProduct = (props) => {
	console.log("EditProduct.props:");
	console.log(props);
	const { details, id, uri } = props;
	return (
		<div>
			<h2>Edit existing product in the database</h2>
			<Form details={details} id={id} uri={uri} />
			<DeleteProductButton onClickDelete={props.onClickDelete} />
		</div>
	);
};

export default EditProduct;
