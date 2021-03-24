const ListItem = (props) => {
	const { title, price, description } = props.data;
	return (
		<p>
			<b>Title:</b>
			<span>{title}</span>
			<b>Price:</b>
			<span>{price}</span>
			<b>Description:</b>
			<span>{description}</span>
		</p>
	);
};

export default ListItem;