import React, { Component } from "react";

class GetSnapShotBefore extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  componentDidUpdate(preProps, prevstate, snapshot) {
    // /console.log("component did update", snapshot, this.props.data);
    console.log("component did update", snapshot, this.state.count);
  }

  getSnapshotBeforeUpdate(preProps, prevstate) {
    console.log("getsnapshotbefore");
    // return "hello" + preProps.data;
    return `Hello...  ${prevstate.count} `;
  }
  render() {
    return (
      <>
        <h1>GetSnapShotBefore Method</h1>
        {/* <h2>My name is a {this.props.data}</h2> */}
        <h2>My Counter Value is a {this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click Me
        </button>
      </>
    );
  }
}

export default GetSnapShotBefore;


// getsnapshotbefore method used with componentdidupdating, return prestate , preprops and snapshot
// snapshot take previous value state or props.
// render snapshot method then componentdidupdating.
