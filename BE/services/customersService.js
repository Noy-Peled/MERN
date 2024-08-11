const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/users";

// Get - Get all products and change data as needed
async function getCustomers() {
  const { data: users } = await axios.get(url);
  const customers = users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      city: user.address.city,
    };
  });
  return customers;
}

module.exports = { getCustomers };
