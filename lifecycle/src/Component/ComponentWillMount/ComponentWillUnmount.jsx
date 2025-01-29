import React, { Component } from "react";
import Toggle from "./Toggle";

class ComponentWillUnmount extends Component {
  constructor() {
    super();

    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <div>
        <Toggle />
        <h1> ComponentWillMount (Parent Component)</h1>
        {this.state.show ? (
          <h4>Toggle Component show</h4>
        ) : (
          <h4>Toggle Component Remove</h4>
        )}

        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle Button
        </button>
      </div>
    );
  }
}

export default ComponentWillUnmount;
