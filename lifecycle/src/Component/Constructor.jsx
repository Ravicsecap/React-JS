import React, { Component } from "react";

export class Constructor extends Component {
  constructor() {
    super();

    this.state = {
      name: "Ravi",
      suraname: "Sahani",
    };

    // console.log("hello , frist call Constructor");
  }
  render() {
    // console.log(`second one me `);
    return (
      <div>
        {" "}
        Hello , My name is {this.state.name} {this.state.suraname}
      </div>
    );
  }
}

export default Constructor;

// specification - props - first call constructor use for state intialization and props.
// cons - we cant use for Api calling bcus api show on UI need for desplay render method.
