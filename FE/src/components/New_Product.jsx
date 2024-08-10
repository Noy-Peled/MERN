import React, { useRef, useState } from "react";
import { createProduct } from "../services/productService";

function New_Product() {
  // State to manage the new product's details
  const [newProduct, setNewProduct] = useState({});

  // Ref to access the file input element
  const fileInputRef = useRef(null);

  // Function to send the data
  const sendData = async () => {
    const status = await createProduct(newProduct);
    console.log(status);
  };

  // Function to handle input changes
  const inputHendler = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  // Function to activate a file input by clicking the button
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // Return div with inputs for create a new product and a button to send the data
  return (
    <div>
      <h2>Add New Product</h2>

      <div className="textGroup">
        <span>Name: </span>
        <input
          name="name"
          type="text"
          placeholder="add the product name"
          onChange={inputHendler}
        />
      </div>
      <div className="textGroup">
        <span>Price:</span>
        <input
          name="price"
          type="number"
          placeholder="add the product price"
          onChange={inputHendler}
        />
      </div>
      <div className="textGroup">
        <span> Picture:</span>
        <input
          ref={fileInputRef}
          name="picture"
          type="file"
          htmlFor="file"
          style={{ display: "none" }}
          onChange={inputHendler}
        />
        <button onClick={handleButtonClick}>Select a file</button>
        <label>
          {newProduct?.picture?.length > 0
            ? newProduct?.picture
            : "No file selected"}
        </label>
      </div>
      <button onClick={sendData}>Create</button>
    </div>
  );
}

export default New_Product;
