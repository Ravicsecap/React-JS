import React, { useState } from "react";
import axios from "axios";

const AxiosPost = () => {
  const [info, setInfo] = useState({
    id: "",
    name: "",
    email: "",
  });

  const inputHandle = (e) => {
    setInfo({ ...info, id: e.target.value });
    setInfo({ ...info, name: e.target.value });
    setInfo({ ...info, email: e.target.value });
  };

  const submitFrom = (e) => {
    e.preventDefault();
    axios
      .post(" https://jsonplaceholder.typicode.com/users", { info })
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <div>
      <h2>AxiosPost Concept</h2>

      <form onSubmit={submitFrom}>
        <input
          type="text"
          name="id"
          onChange={inputHandle}
          placeholder="Enter your id"
        />
        <br />
        <br />
        <input
          type="text"
          name="name"
          onChange={inputHandle}
          placeholder="Enter your name"
        />
        <br />
        <br />
        <input
          type="text"
          name="email"
          onChange={inputHandle}
          placeholder="Enter your email"
        />
        <br />
        <br />

        <button onClick={submitFrom}>Click Me</button>
      </form>
    </div>
  );
};

export default AxiosPost;

// useEffect(() => {
//   let url = `https://jsonplaceholder.typicode.com/users`;
//   axios.get(url).then((response) => {
//     console.log(response);
//   });
// });
