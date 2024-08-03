import axios from "axios";

const url = "http://127.0.0.1:8000/api/products";

// get all products from server
const getAllProducts = async () => {
  const { data: products } = await axios.get(url);
  return products;
};

// get product by id from server
const getProductById = async (id) => {
  const { data: protuct } = await axios.get(`${url}/${id}`);
  return protuct;
};

// sent data of new product to server
const createProduct = async (newProductData) => {
  const { data: status } = await axios.post(url, newProductData);
  return status;
};

const updateProduct = async (id, obj) => {
  const { data: status } = await axios.put(`${url}/${id}`, obj);
  return status;
};

const deleteProduct = async (id) => {
  const { data: status } = await axios.delete(`${url}/${id}`);
  return status;
};

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
