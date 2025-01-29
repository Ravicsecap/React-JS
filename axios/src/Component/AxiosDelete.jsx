import axios from "axios";
import React, { useEffect } from "react";

const AxiosDelete = () => {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/albums/2")
      .then((response) => {
        console.log(response.data);
      });
  });

  const deleteHandler = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/albums/2")
      .then((response) => {
        alert(response);
      });
  };

  return (
    <div>
      <h3>AxiosDelete Concept</h3>
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
};

export default AxiosDelete;
