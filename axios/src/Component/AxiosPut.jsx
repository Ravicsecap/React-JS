import axios from "axios";
import React, { useEffect, useState } from "react";

const AxiosPut = () => {
  const [value, setValue] = useState({
    id: "",
    name: "",
  });
  useEffect(() => {
    axios
      .get(" https://jsonplaceholder.typicode.com/users/2")
      .then((response) => {
        console.log(response.data);
      });
  });

  const handleInput = (e) => {
    setValue({ ...value, [e.target.value]: e.target.value });
  };

  const sumbitFrom = (e) => {
    e.preventDefault();
    axios
      .put(" https://jsonplaceholder.typicode.com/users/2", { value })
      .then((response) => {
        console.log(response.data);
      });
  };
  return (
    <div>
      <h3>AxiosPut Concept</h3>

      <form onSubmit={sumbitFrom}>
        <input
          type="text"
          name="id"
          onChange={handleInput}
          placeholder="Enter ypur id"
        />
        <br />
        <br />
        <input
          type="text"
          name="name"
          onChange={handleInput}
          placeholder="Enter ypur name"
        />
        <br />
        <br></br>

        <button onSubmit={sumbitFrom}>Click me </button>
      </form>
    </div>
  );
};

export default AxiosPut;
