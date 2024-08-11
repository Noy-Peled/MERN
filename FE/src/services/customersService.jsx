import axios from "axios";

const url = "http://127.0.0.1:8000/api/customers";

// get all customers from server
const getAllCustomers = async () => {
  const { data: customers } = await axios.get(url);
  return customers;
};

export { getAllCustomers };
