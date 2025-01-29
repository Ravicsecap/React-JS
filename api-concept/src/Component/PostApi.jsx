import React from "react";
import { useState } from "react";

const PostApi = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [salary, setSalary] = useState("");

  const sumbitFrom = () => {
    // console.log({ name, age, salary });
    let data = { name, age, salary };

    fetch({
      method: "POST",
      headers: {
        Accept: "application/json",
        Content: "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log(result);
    });
  };

  return (
    <div>
      <h2>Post API Concept</h2>

      <input
        type="text"
        value={name}
        placeholder="enter your name"
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        value={age}
        placeholder="enter your age"
        onChange={(e) => setAge(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        value={salary}
        placeholder="enter your salary"
        onChange={(e) => setSalary(e.target.value)}
      />

      <br />
      <br />

      <button type="button" onClick={sumbitFrom}>
        Submit
      </button>
    </div>
  );
};

export default PostApi;
