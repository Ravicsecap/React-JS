import React from "react";
import { useEffect, useState } from "react";

const DeleteApi = () => {
  const [data, setData] = useState([" "]);
  useEffect(() => {
    showListProduct();
  });

  const showListProduct = () => {
    fetch("https://fakestoreapi.com/products").then((result) => {
      result.json().then((response) => {
        // console.log(response);
        setData(response);
      });
    });

    const deleteProduct = (productid) => {
      fetch(`https://fakestoreapi.com/products/${productid}`, {
        method: "DELETE",
      }).then((result) => {
        result.json().then((response) => {
          console.log(`Response:`, response);
          //   setData(response);
          showListProduct();
        });
      });
    };

    return (
      <div>
        <h1>DeleteApi Concept </h1>
        <table border={2}>
          <thead>
            <tr>
              <td>ID</td>
              <td>Title</td>
              <td>Price</td>
              <td>Description</td>
              <td>Category</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {data.map((infoproduct, i) => (
              <tr key={i}>
                <td>{infoproduct.id}</td>
                <td>{infoproduct.title}</td>
                <td>{infoproduct.price}</td>
                <td>{infoproduct.description}</td>
                <td>{infoproduct.category}</td>
                <td>
                  {
                    <button onClick={() => deleteProduct(infoproduct.id)}>
                      Remove
                    </button>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
};

export default DeleteApi;
