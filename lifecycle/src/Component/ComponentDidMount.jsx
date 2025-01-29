import React, { Component } from "react";

export class ComponentDidMount extends Component {
  constructor() {
    super();
    this.state = {
      name: "Ravi Sahani",
    };
    console.log("frist render constructor");
  }

  componentDidMount() {
    console.log("third render Component did mount");
  }
  render() {
    console.log("seacond render Render method");
    return (
      <div>
        <h1>ComponentDidMount Method</h1>

        <h2>My , name is a {this.state.name}</h2>
        <button onClick={() => this.setState({ name: "rihansahani" })}>
          Click Me
        </button>
      </div>
    );
  }
}

export default ComponentDidMount;

// Specification - first rendering constructor , second render method and third one ComponentDidMount Method
// - if any props and state change or update cant effect CompnentdidMount method.
// - ComponentdidMount method only use for Api calling bcus its one time render but render method any then call automaticallly, constructor method cant use api.
