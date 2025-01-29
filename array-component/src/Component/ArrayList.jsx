import React from "react";

const ArrayList = () => {
  //   let name = ["ravi ", "komal", "sanket", "vinod"];

  //   name.map((item, length, array) => {
  //     console.log(item, length,array);
  //   });

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
      <h1>ArrayList Component</h1>
      <table border={2}>
        <thead>
          <tr>
            <td>name</td>
            <td>surname</td>
            <td>mobile_no</td>
            <td>email_id</td>
          </tr>
        </thead>
        {employee.map((data) => (
          <tbody>
            <tr key={data.email_id}>
              <td>{data.name}</td>
              <td>{data.surname}</td>
              <td>{data.mobile_no}</td>
              <td>{data.email_id}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ArrayList;



// Specfication - if want table , list that time use array object and scanning by only Map Method. 
// just its performing every element and return the new array value.
// dont use loop bcus only scanning.
