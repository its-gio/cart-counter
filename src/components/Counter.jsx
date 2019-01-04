import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }

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
