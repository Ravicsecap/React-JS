import React, { Component } from "react";

class Toggle extends Component {
  componentWillUnmount() {
    alert("Toggle Component remove");
  }
  render() {
    return (
      <div>
        <h2>Toggle Component (Child or Remove Component) </h2>
      </div>
    );
  }
}

export default Toggle;
