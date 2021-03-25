import { Link, navigate, Router } from "@reach/router";
import axios from "axios";
import { useEffect, useState } from "react";
import ProductDetails from "../components/Read/ProductDetails/ProductDetails";
import EditProduct from "../components/Update/EditProduct";

const Product = (props) => {
	const { id, uri } = props;
	const [details, setDetails] = useState({});
	const apiBaseUrl = "http://localhost:8000/api/products";

	useEffect(() => {
		axios
			.get(`${apiBaseUrl}/${id}`)
			.then((res) => {
				console.log(res);
				setDetails(res.data);
			})
			.catch((err) => console.log(err));
	}, [id, uri]);

	const onClickEdit = () => {
		console.log(
			`the edit button was clicked for item ${id}, navigating to /edit`
		);
		props.navigate(`edit`);
	};

	const onClickDelete = () => {
		axios
			.delete(`${apiBaseUrl}/${id}`)
			.then((res) => {
				console.log(res);
				navigate("/products");
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			{details && (
				<>
					<Router>
						<ProductDetails
							path='/'
							details={details}
							onClickEdit={onClickEdit}
						/>
						<EditProduct
							path='edit'
							details={details}
							id={id}
							onClickDelete={onClickDelete}
						/>
					</Router>
					<hr />
					<Link to='/products'>Back To Product List</Link>
				</>
			)}
		</div>
	);
};

export default Product;
