import React, { Component } from "react";

export class PureComonent extends Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       count: 0,
  //     };

  render() {
    return (
      <div>
        <h3>My Count Value:{this.props.data}</h3>

        {/* <h2>PureComonent</h2>
        <h3>My Count Value:{this.state.count}</h3>
        <button onClick={() => this.setState({ count: 1 })}>Click Me</button> */}
      </div>
    );
  }
}

export default PureComonent;

// Specification - PureComponent used For Class Based Component and I Want to check functional Component that time used useMemo() Hooks.
// - Only Write PureComponent and Import PureComponent.
// Majorly used if my state or props change on UI that Time rendering My Component Other wise never rendring.
