import { useState } from "react";
import axios from "axios";
import { apiBaseUrl } from "../../../../views/Main";

const Form = () => {
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");

	const onSubmitHandler = (e) => {
		e.preventDefault();
		axios
			.post(apiBaseUrl, {
				title: title,
				price: price,
				description: description,
			})
			.then((res) => {
				console.log(res);
				setTitle("");
				setPrice("");
				setDescription("");
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
			<button type='submit'>Create</button>
		</form>
	);
};

export default Form;
