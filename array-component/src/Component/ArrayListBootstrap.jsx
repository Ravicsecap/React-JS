import React from "react";
import Table from "react-bootstrap/Table";

const ArrayListBootstrap = () => {
  const employee = [
    {
      name: "ravi",
      surname: "sahani",
      mobile_no: 98656,
      email_id: "ravi166@gmail.com",
    },

    {
      name: "ravi",
      surname: "verma",
      mobile_no: 8976565,
      email_id: "rverma166@gmail.com",
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
      <h1>ArrayListBootstrap Component</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <td> Id</td>
            <td> name</td>
            <td>surname</td>
            <td>mobile_no</td>
            <td>email_id</td>
          </tr>
        </thead>

        <tbody>
          {employee.map((data, i) =>
            data.name === "ravi" ? (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{data.name}</td>
                <td>{data.surname}</td>
                <td>{data.mobile_no}</td>
                <td>{data.email_id}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ArrayListBootstrap;
