import React from "react";
import { useState } from "react";

function GetFromValues() {
  const [Carname, setCarname] = useState("");
  const [option, setOption] = useState("");

  function submitData(e) {
    console.log(Carname, option);
    e.preventDefault();
  }

  return (
    <div>
      <h1>GetFromValues</h1>
      <form style={{ margin: "20px" }} onSubmit={submitData}>
        <input
          type="text"
          placeholder="Enter your Carname"
          onChange={(e) => setCarname(e.target.value)}
        />
        <br />

        <select onChange={(e) => setOption(e.target.value)}>
          <option value="tata">tata</option>
          <option value="Mahindra">Mahindra</option>
          <option value="Suzuki">Suzuki</option>
          <option value="VW">VW</option>
        </select>

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GetFromValues;
