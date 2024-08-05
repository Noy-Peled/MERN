const axios = require("axios");

const url = "https://jsonplaceholder.typicode.com/users";

async function getCustumers() {
  const { data: users } = await axios.get(url);
  const custumers = users.map((user) => {
    return {
      name: user.name,
      email: user.email,
      city: user.address.city,
    };
  });
  return custumers;
}

getCustumers().then((data) => console.log(data));

module.exports = { getCustumers };
