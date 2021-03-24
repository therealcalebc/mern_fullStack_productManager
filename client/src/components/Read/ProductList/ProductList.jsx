import { useEffect, useState } from "react";
import axios from "axios";
import ListItem from "./ListItem/ListItem";

const ProductList = (props) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		axios
			.get("http://localhost:8000/api/products")
			.then((res) => {
				console.log(res);
				setItems(res.data.results);
			})
			.catch((err) => console.log(err));
	}, []);

	const onClickRefresh = (e) => {
		axios
			.get("http://localhost:8000/api/products")
			.then((res) => {
				console.log(res);
				setItems(res.data.results);
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<h2>Review all products</h2>
			<button onClick={onClickRefresh}>refresh</button>
			{items.map((item, index) => (
				<ListItem key={index} data={item} />
			))}
		</div>
	);
};

export default ProductList;
