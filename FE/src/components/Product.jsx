import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/productService";
import "../CSS/compStyle.css";

function Product() {
  const [products, setProducts] = useState([]);

  const handleProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    handleProducts();
  }, []);

  return (
    <div className="compStyle">
      <h2>Products</h2>
      {products.map((product) => (
        <div className="compStyle" key={product._id}>
          <span>Name: {product.name}</span>
          <span>Price: {product.price}$</span>
          <button>Remove</button>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Product;
