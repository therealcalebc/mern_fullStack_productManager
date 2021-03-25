import { Link } from "@reach/router";
import axios from "axios";
import DeleteProductButton from "../../../Destroy/DeleteProductButton";

const ListItem = (props) => {
	const { _id, title } = props.data;
	const apiBaseUrl = "http://localhost:8000/api/products";

	const onClickDelete = () => {
		axios
			.delete(`${apiBaseUrl}/${_id}`)
			.then((res) => {
				console.log(res);
				props.removeFromDom(_id);
			})
			.catch((err) => console.log(err));
	};

	return (
		<p>
			<Link to={_id}>{title}</Link>
			<DeleteProductButton onClickDelete={onClickDelete} />
		</p>
	);
};

export default ListItem;
