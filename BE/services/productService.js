const productModel = require("../models/prooductModel");

// get - get all products
const getAllProducts = async () => {
  const products = await productModel.find({});
  return products;
};

// get - get product by id
const getProductById = async (id) => {
  const product = await productModel.findById(id);
  return product;
};

// post - create product
const createProduct = async (newData) => {
  const newProduct = new productModel(newData);
  await newProduct.save();
  return "created";
};

// put - update product
const updateProduct = async (id, dataToUpdate) => {
  await productModel.findByIdAndUpdate(id, dataToUpdate);
  return "updated";
};

// delete - delete product
const deleteProduce = async (id) => {
  await productModel.findByIdAndDelete(id);
  return "deleted";
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduce,
};
