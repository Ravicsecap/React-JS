import React, { Component } from "react";

class ShouldComponent extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  shouldComponentUpdate() {
    console.log("ShouldComponent", this.state.count);
    if (this.state.count > 5 && this.state.count < 10) {
      return true;
    }
  }
  render() {
    return (
      <div>
        <h1>ShouldComponent Method</h1>
        <h2>The value of shouldcomponent {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click Me
        </button>
      </div>
    );
  }
}

export default ShouldComponent;

//Specifecation - shouldComponentUpdate used for if i want to required specfict time render my component that time used shouldcomponent.
// sholudcomponentupdate method reture false value . thats why write (return true).
// condition want to rendering.
 
