// import { useEffect, useState } from "react";
import NewProduct from "../components/Create/NewProduct/NewProduct";
import ProductList from "../components/Read/ProductList/ProductList";
// import axios from "axios";

const Main = () => {
	// const [message, setMessage] = useState("Loading...");
	// useEffect(() => {
	// 	axios
	// 		.get("http://localhost:8000/api")
	// 		.then((res) => setMessage(res.data.message))
	// 		.catch((err) => console.log(err));
	// }, []);
	return (
		<div>
			<h1>Product Manager</h1>
			<NewProduct />
			<hr />
			<ProductList />
		</div>
	);
};

export default Main;
