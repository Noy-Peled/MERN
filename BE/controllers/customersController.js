const express = require("express");
const customersService = require("../services/customersService");
const router = express.Router();

// get controller - get all costumers
router.get("/", async (req, res) => {
  try {
    const costumers = await customersService.getCustomers();
    res.json(costumers);
  } catch (e) {
    res.json(e.message);
  }
});

module.exports = router;
