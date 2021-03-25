import ListItem from "./ListItem/ListItem";

const ProductList = (props) => {
	const { items, notifyParent, removeItemFromDom } = props;
	return (
		<div>
			<h2>Review all products</h2>
			<button onClick={notifyParent}>refresh</button>
			{items &&
				items.map((item) => (
					<ListItem
						key={item._id}
						data={item}
						removeFromDom={removeItemFromDom}
					/>
				))}
		</div>
	);
};

export default ProductList;
