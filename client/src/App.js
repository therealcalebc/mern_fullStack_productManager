import "./App.css";
import { Router, Redirect } from "@reach/router";
import Main from "./views/Main";
import Product from "./views/Product";

function App() {
	return (
		<div className='App'>
			<Router>
				<Redirect from='/' to='products' />
				<Main path='products' />
				<Product path='products/:id' />
			</Router>
		</div>
	);
}

export default App;
