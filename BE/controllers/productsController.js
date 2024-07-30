const express = require("express");
const productService = require("../services/productService");
const router = express.Router();

// get - get all controller
router.get("/", async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (e) {
    res.json(e.message);
  }
});

// get - get by id controller
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await productService.getProductById(id);
    res.json(product);
  } catch (e) {
    res.json(e.message);
  }
});

// post - create controller
router.post("/", async (req, res) => {
  try {
    const productData = req.body;
    const status = await productService.createProduct(productData);
    res.json({ msg: status });
  } catch (e) {
    res.json(e.message);
  }
});

// put - update controller
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const newProductData = req.body;
    const status = await productService.updateProduct(id, newProductData);
    res.json({ msg: status });
  } catch (e) {
    res.json(e.message);
  }
});

// delete - delete controller
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const status = await productService.deleteProduce(id);
    res.json({ msg: status });
  } catch (e) {
    res.json(e.message);
  }
});

module.exports = router;
