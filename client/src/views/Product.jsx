import axios from "axios";
import { useEffect, useState } from "react";
import ProductDetails from "../components/Read/ProductDetails/ProductDetails";
import { apiBaseUrl } from "../views/Main";

const Product = (props) => {
	const { id } = props;
	const [details, setDetails] = useState({});

	useEffect(() => {
		axios
			.get(`${apiBaseUrl}/${id}`)
			.then((res) => {
				console.log(res);
				setDetails(res.data);
			})
			.catch((err) => console.log(err));
	}, [id]);

	return <>{details && <ProductDetails details={details} />}</>;
};

export default Product;
