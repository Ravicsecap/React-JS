import React from "react";
import { useState, useEffect } from "react";

const Prefilledapi = () => {
  const [data, setData] = useState([""]);
  const [editdata, setEditData] = useState({
    id: "",
    name: "",
    phone: "",
    website: "",
  });
  useEffect(() => {
    productList();
  }, []);

  const productList = () => {
    fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
      result.json().then((response) => {
        setData(response);
        setEditData({
          id: response[0].id,
          name: response[0].name,
          phone: response[0].phone,
          website: response[0].website,
        });
        console.log(response);
      });
    });
  };

  const editfunction = (userid) => {
    // console.log(data[userid - 1]);
    let infodata = data[userid - 1];
    setEditData({
      id: infodata.id,
      name: infodata.name,
      phone: infodata.phone,
      website: infodata.website,
    });
  };

  return (
    <div>
      <h1>PreFilledApi Concept</h1>

      <table border={2}>
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
                <button onClick={() => editfunction(info.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <input type="text" value={editdata.id} />
        <br /> <br />
        <input type="text" value={editdata.name} />
        <br /> <br />
        <input type="text" value={editdata.phone} />
        <br /> <br />
        <input type="text" value={editdata.website} />
        <br />
        <button type="button">update</button>
      </div>
    </div>
  );
};

export default Prefilledapi;
