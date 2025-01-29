import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosGet = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    let url = "https://fakestoreapi.com/products";

    axios.get(url).then((response) => {
      // console.log(response);
      setData(response.data);
    });
  }, []);
  return (
    <div>
      <h1>AxiosGet Concept</h1>
      {data.map((info, i) => (
        <h2 key={i}>{info.title}</h2>
      ))}
    </div>
  );
};

export default AxiosGet;

// Sepcification - its used for complex api fetching.. 
// everytime used useEffect hook for api fetching And show the data on UI for used useState Hook.
//"https://fakestoreapi.com/products"
