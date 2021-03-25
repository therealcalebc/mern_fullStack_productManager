import { useState } from "react";
import axios from "axios";

const Form = (props) => {
	console.log("EditProduct.Form.props:");
	console.log(props);
	const { id } = props;
	const {
		title: currentTitle,
		price: currentPrice,
		description: currentDescription,
	} = props.details;
	const [title, setTitle] = useState(currentTitle);
	const [price, setPrice] = useState(currentPrice);
	const [description, setDescription] = useState(currentDescription);
	const apiBaseUrl = "http://localhost:8000/api/products";

	const onSubmitHandler = (e) => {
		e.preventDefault();
		axios
			.put(`${apiBaseUrl}/${id}`, {
				title: title,
				price: price,
				description: description,
			})
			.then((res) => {
				console.log(res);
				alert(
					`Successfully updated product!\n${id}\n${title}\n${price}\n${description}`
				);
			})
			.catch((err) => console.log(err));
	};

	return (
		<form onSubmit={onSubmitHandler}>
			<p>
				<label>Title</label>
				<input
					type='text'
					onChange={(e) => setTitle(e.target.value)}
					value={title}
				/>
			</p>
			<p>
				<label>Price</label>
				<input
					type='text'
					onChange={(e) => setPrice(e.target.value)}
					value={price}
				/>
			</p>
			<p>
				<label>Description</label>
				<input
					type='text'
					onChange={(e) => setDescription(e.target.value)}
					value={description}
				/>
			</p>
			<button type='submit'>Update</button>
		</form>
	);
};

export default Form;
