import React, { Component } from "react";

class Constructor extends Component {
  constructor() {
    super();
    // console.log("frist call constructor");
    this.state = {
      name: "Ravi Sahani",
      age: 28,
    };
  }
  render() {
    console.log("second call constructor");
    return (
      <>
        <h1>Mounting or Load / Life Cycle = Constructor Method</h1>
        <h2>My name is a {this.state.name}</h2>
        <h3>i am {this.state.age} year old</h3>
      </>
    );
  }
}

export default Constructor;

// frist call constructor with must be used super() bcus intherited parent class componet properties
// Api cant used  inside constructor.
// this keyword use for call state and setMethod 
