import React, { Component } from "react";
import Counter from "./Counter.jsx";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleIncrement = counter => {
    this.setState(prevState => {
      const { counters } = prevState;
      // finding index button clicked counter in state array
      const index = counters.indexOf(counter);
      counters[index] = counter;
      counters[index].value++;
      return { counters };
    });
  };

  handleDelete = id => {
    const counters = this.state.counters.filter(x => x.id !== id);
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            delete={this.handleDelete}
            increment={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
