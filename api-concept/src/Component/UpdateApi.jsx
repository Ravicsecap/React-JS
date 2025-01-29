import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

const UpdateApi = () => {
  const [data, setData] = useState([""]);
  const [updatedata, setUpdatedata] = useState({
    id: null,
    name: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    productList();
  }, []);

  const productList = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`).then((result) => {
      result.json().then((response) => {
        setData(response);
        setUpdatedata({
          id: response[0].id,
          name: response[0].name,
          phone: response[0].phone,
          website: response[0].website,
        });
      });
    });
  };

  const editFunction = (userid) => {
    let value = data[userid - 1];
    setUpdatedata({
      id: value.id,
      name: value.name,
      phone: value.phone,
      website: value.website,
    });
  };

  const upDateValue = () => {
    let id = updatedata.id;
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ updatedata }).then((result) => {
        result.json().then((response) => {
          console.log(response);
          productList();
        });
      }),
    });
  };

  return (
    <div>
      <h2>UpdateApi (Put Method ) Concept</h2>

      <Table variant="dark" striped hover>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Phone</td>
            <td>Website</td>
            <td>Edit List</td>
          </tr>
        </thead>
        <tbody>
          {data.map((info, i) => (
            <tr key={i}>
              <td>{info.id}</td>
              <td>{info.name}</td>
              <td>{info.phone}</td>
              <td>{info.website}</td>
              <td>
                <Button onClick={() => editFunction(info.id)}>Edit</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div>
        <input
          type="text"
          value={updatedata.id}
          onChange={(e) => setUpdatedata({ ...updatedata, id: e.target.value })}
        />
        <br /> <br />
        <input
          type="text"
          value={updatedata.name}
          onChange={(e) =>
            setUpdatedata({ ...updatedata, name: e.target.value })
          }
        />
        <br /> <br />
        <input
          type="text"
          value={updatedata.phone}
          onChange={(e) =>
            setUpdatedata({ ...updatedata, phone: e.target.value })
          }
        />
        <br /> <br />
        <input
          type="text"
          value={updatedata.website}
          onChange={(e) =>
            setUpdatedata({ ...updatedata, website: e.target.value })
          }
        />
        <br />
        <Button onClick={upDateValue}>update</Button>
      </div>
    </div>
  );
};

export default UpdateApi;
