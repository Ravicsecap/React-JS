import React from "react";
import Table from "react-bootstrap/esm/Table";

const NestedArray = () => {
  const employee = [
    {
      name: "ravi",
      surname: "sahani",
      mobile_no: 98656,
      email_id: "ravi166@gmail.com",
      addres: [
        {
          parmanent_add:
            "room no. 121 , govind nagar , santacruz-west , Mumbai.",
        },
        { Current_add: "Room no.101 , Rajiv Nagar , Khar - west , Mumbai." },
      ],
    },

    {
      name: "ravi",
      surname: "verma",
      mobile_no: 8976565,
      email_id: "rverma166@gmail.com",
      addres: [
        {
          parmanent_add: "room no. 100 , Navand Nagar , Sector-22 , Delhi.",
        },
        { Current_add: " Room no.008 , Vina Nagar , Sector-454 , Delhi." },
      ],
    },

    {
      name: "komal",
      surname: "iyni",
      mobile_no: 98656565,
      email_id: "komal5689@gmail.com",
      addres: [
        {
          parmanent_add: "Room no. 001 , Vega Nagar , Btm-Layout , Banglore.",
        },
        { Current_add: "Room no.898, Srisalam Nagar , Silk-Road , Banglore." },
      ],
    },
    {
      name: "seva",
      surname: "thakur",
      mobile_no: 89898956,
      email_id: "seva235@gmail.com",
      addres: [
        {
          parmanent_add:
            "Room no. 121 , Masthan Nagar , Jubille Hill, Hyderabad.",
        },
        { Current_add: "Room no.101 , K.C.S Nagar , Hope From , Banglore." },
      ],
    },
    {
      name: "leena",
      surname: "thalani",
      mobile_no: 7896534,
      email_id: "leena166@gmail.com",
      addres: [
        {
          parmanent_add:
            "Room no. 44 , Revana Nagar , Banjara Hills , Hyderabad.",
        },
        {
          Current_add:
            "Room no. 44 , Revana Nagar , Banjara Hills , Hyderabad.",
        },
      ],
    },
  ];

  return (
    <div>
      <h1>NestedArray Component</h1>
      <Table variant="dark" striped bordered hover>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Surname</td>
            <td>Mobile-No</td>
            <td>Email_No</td>
            <td>Address</td>
          </tr>
        </thead>
        <tbody>
          {employee.map((empdata, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{empdata.name}</td>
              <td>{empdata.surname}</td>
              <td>{empdata.mobile_no}</td>
              <td>{empdata.email_id}</td>
              <td>
                {empdata.addres.map((address, j) => (
                  <tr>
                    <td>{address.Current_add}</td>
                    <td>{address.parmanent_add}</td>
                  </tr>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default NestedArray;
