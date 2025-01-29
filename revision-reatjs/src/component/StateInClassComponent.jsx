import React, { Component } from "react";

export default class StateInClassComponent extends Component {
  constructor() {
    super();

    // this.state = {
    //   name: "Ravi Sahani",
    // };

    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <div>
        <h1> My name is a {this.state.value} </h1>
        <button onClick={() => this.setState({ value: this.state.value + 1 })}>
          Click
        </button>
      </div>
    );
  }
}
