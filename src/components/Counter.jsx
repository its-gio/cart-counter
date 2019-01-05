import React, { Component } from "react";

class Counter extends Component {
  formatCount = () => {
    const { value } = this.props.counter;
    return value == 0 ? "Zero" : value;
  };

  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>
        <button onClick={() => this.props.increment(this.props.counter)}>
          +
        </button>
        <button onClick={() => this.props.delete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
