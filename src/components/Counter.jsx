import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value
  };

  handleChange = () => {
    this.setState(prevState => {
      return { value: prevState.value + 1 };
    });
  };

  formatCount = () => {
    const { value } = this.state;
    return value == 0 ? "Zero" : value;
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
