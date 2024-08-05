const express = require("express");
const cors = require("cors");
const { connect } = require("mongoose");

const port = 8000;
const app = express();

// conection to db
connect("mongodb://127.0.0.1:27017/MERN").then(() =>
  console.log("connected to db")
);

// middlewares
app.use(cors());
app.use(express.json());

// products controller
const productsController = require("./controllers/productsController");
app.use("/api/products", productsController);

// customers controller
const customersController = require("./controllers/customersController");
app.use("/api/customers", customersController);

// start server
app.listen(port, () => {
  console.log(`app is listening in port ${port}`);
});
