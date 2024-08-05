const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/users";

async function getCustomers() {
  const { data: users } = await axios.get(url);
  const customers = users.map((user) => {
    return {
      name: user.name,
      email: user.email,
      city: user.address.city,
    };
  });
  return customers;
}

module.exports = { getCustomers };
