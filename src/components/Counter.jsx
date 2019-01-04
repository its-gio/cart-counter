import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  handleChange = () => {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  };

  formatCount = () => {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  };

  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button onClick={this.handleChange}>+</button>
      </div>
    );
  }
}

export default Counter;
