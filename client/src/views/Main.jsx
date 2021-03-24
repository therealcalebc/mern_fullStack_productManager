import NewProduct from "../components/Create/NewProduct/NewProduct";
import ProductList from "../components/Read/ProductList/ProductList";

export const apiBaseUrl = "http://localhost:8000/api/products";

const Main = () => {
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
