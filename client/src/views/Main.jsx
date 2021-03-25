import axios from "axios";
import { useEffect, useState } from "react";
import NewProduct from "../components/Create/NewProduct/NewProduct";
import ProductList from "../components/Read/ProductList/ProductList";

const Main = ({ uri }) => {
	const [productList, setProductList] = useState([]);
	const apiBaseUrl = "http://localhost:8000/api/products";

	useEffect(() => {
		axios
			.get(apiBaseUrl)
			.then((res) => {
				console.log(res);
				setProductList(res.data.results);
			})
			.catch((err) => console.log(err));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const refreshList = (e) => {
		axios
			.get(apiBaseUrl)
			.then((res) => {
				console.log(res);
				setProductList(res.data.results);
			})
			.catch((err) => console.log(err));
	};

	const removeItemFromDom = (id) => {
		setProductList(productList.filter((item) => item._id !== id));
	};

	return (
		<div>
			<h1>Product Manager</h1>
			<NewProduct notifyParent={refreshList} />
			<hr />
			<ProductList
				items={productList}
				notifyParent={refreshList}
				removeItemFromDom={removeItemFromDom}
			/>
		</div>
	);
};

export default Main;
