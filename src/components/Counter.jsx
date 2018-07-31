import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1
  };

  render() {
    return (
      <div>
        <span>{this.count}</span>
        <button>+</button>
      </div>
    );
  }
}

export default Counter;
