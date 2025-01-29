import React, { Component } from "react";

class Rendering extends Component {
  //   constructor() {
  //     super();

  //     this.state = {
  //       name: "Ravi Sahani",
  //     };
  //   }
  render() {
    // console.log("frist mount", this.state);
    console.log("third rendering props", this.props);
    return (
      <div>
        <h1>Rendering method</h1>
        <h2>My name is a {this.props.data}</h2>
        {/* <h1>{this.state.name}</h1>
        <button onClick={() => this.setState({ name: "Rihan sahani" })}>
          Click Me
        </button> */}
      </div>
    );
  }
}

export default Rendering;
