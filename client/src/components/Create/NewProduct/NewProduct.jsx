import Form from "./Form/Form";

const NewProduct = (props) => {
	return (
		<>
			<h2>Add new products to the database</h2>
			<Form notifyParent={props.notifyParent} />
		</>
	);
};

export default NewProduct;
