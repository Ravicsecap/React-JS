import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Table from "react-bootstrap/Table";

const ApiCalling2 = () => {
  const [bags, setBags] = useState([""]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products").then((result) => {
      result.json().then((response) => {
        // console.log(response);
        setBags(response);
      });
    });
  }, []);
  return (
    <div>
      <h2> How to API Calling ahow table from</h2>
      <Table variant="dark" striped bordered hover>
        <thead>
          <tr>
            <td>ID</td>
            <td>Title</td>
            <td>Price</td>
            <td>Description</td>
            <td>Category</td>
            <td>Image</td>
            {/* <td>Rating</td> */}
          </tr>
        </thead>
        <tbody>
          {bags.map((info, i) => (
            <tr>
              <td>{info.id}</td>
              <td>{info.title}</td>
              <td>{info.price}</td>
              <td>{info.description}</td>
              <td>{info.category}</td>
              <td>{info.image}</td>
              {/* <td>{info.rating.rate}</td> */}
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ApiCalling2;
