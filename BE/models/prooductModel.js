const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  picture: String,
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
