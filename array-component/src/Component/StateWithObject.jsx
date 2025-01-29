import React, { useState } from "react";

const StateWithObject = () => {
  const [info, setInfo] = useState({
    name: "Ravi Sahani",
    age: 28,
    mobile_no: 970245856,
  });
//   console.log(info.name, info.age, info.mobile_no);
  return (
    <div>
      <h1>StateWithObject </h1>
      <h3>Name : {info.name}</h3>
      <input
        type="text"
        value={info.name}
        onChange={(e) => setInfo({ ...info, name: e.target.value })}
      />
      <br />
      <h3>Name : {info.age}</h3>
      <input
        type="text"
        value={info.age}
        onChange={(e) => setInfo({ ...info, age: e.target.value })}
      />
      <br />
      <h3>Name : {info.mobile_no}</h3>
      <input
        type="text"
        value={info.mobile_no}
        onChange={(e) => setInfo({ ...info, mobile_no: e.target.value })}
      />
    </div>
  );
};

export default StateWithObject;
