import React, { Component } from "react";

export class ComponentDidUpdate extends Component {
  constructor() {
    super();

    this.state = {
      name: "ravi sahani",
    };

    console.log("first render constructor");
  }

  componentDidUpdate(prevprops, prevstate, snapshot) {
    console.log("Component did update ", prevstate.name, this.state.name);

    // this.setState({ name: this.state.name + 1 });
    // console.log("third render component did update");

    if (this.state.name <= 5) {
      this.setState({ name: this.state.name + 1 });
    }
  }
  render() {
    console.log("Seacond render rendering method");
    return (
      <div>
        <h1>ComponentDidUpdate</h1>
        <h2>My name is a {this.state.name}</h2>
        <button onClick={() => this.setState({ name: "rihan sahani" })}>
          Click Me
        </button>
      </div>
    );
  }
}

export default ComponentDidUpdate;


// Sefcifaction - ComponentdidUpdatind call when state props change then rendring.
// two parameter prevprops , prevstate and snapshot
 // check for status snapshot always undefiend.
 // ComponentDidMount use for kun si api phale thi kun si nhi hai check for prevstate and this.state.name(currentState).
 
