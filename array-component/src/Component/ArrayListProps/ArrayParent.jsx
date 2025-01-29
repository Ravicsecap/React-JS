import React from "react";
import ArrayChild from "./ArrayChild";
import ListGroup from 'react-bootstrap/ListGroup';


const ArrayParent = () => {
  const employee = [
    {
      name: "ravi",
      surname: "sahani",
      mobile_no: 98656,
      email_id: "ravi166@gmail.com",
    },
    {
      name: "komal",
      surname: "iyni",
      mobile_no: 98656565,
      email_id: "komal5689@gmail.com",
    },
    {
      name: "seva",
      surname: "thakur",
      mobile_no: 89898956,
      email_id: "seva235@gmail.com",
    },
    {
      name: "leena",
      surname: "thalani",
      mobile_no: 7896534,
      email_id: "leena166@gmail.com",
    },
  ];
  return (
    <div>
      <h1>Array Parent list Send By Props</h1>
      {employee.map((empdata, i) => (
        <ArrayChild data={empdata} />
      ))}
    </div>
  );
};

export default ArrayParent;
