// import { useEffect, useState } from "react";
import CreateProduct from "../components/CreateProduct";
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
			<CreateProduct />
		</div>
	);
};

export default Main;
