import axios from "axios";

const url = "http://127.0.0.1:8000/api/products";

// get all products from server
const getAllProducts = async () => {
  const products = await axios.get(url);
  return products;
};

// get product by id from server
const getProductById = async (id) => {
  const protuct = await axios.get(`${url}/${id}`);
  return protuct;
};

// sent data of new product to server
const createProduct = async (newProductData) => {
  const newuser = await axios.post(url, newProductData);
  return "created new product";
};
