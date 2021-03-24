const express = require("express");
const cors = require("cors");
const app = express();
require("./src/config/mongoose.config");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./src/routes/product.routes")(app);

const port = 8000;
app.listen(port, () => {
	console.log(`The server is listening... (port ${port})`);
});
