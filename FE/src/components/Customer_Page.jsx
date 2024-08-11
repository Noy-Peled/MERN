import React, { useEffect, useState } from "react";
import { getAllCustomers } from "../services/customersService";
import "../CSS/compStyle.css";

function Customer_Page() {
  const [customers, setCustomers] = useState([]);

  const hendleCustomers = async () => {
    const data = await getAllCustomers();
    setCustomers(data);
  };

  useEffect(() => {
    hendleCustomers();
  }, []);

  return (
    <div>
      <h2> Customers:</h2>
      <table border={"1px solig black"}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customer_Page;
