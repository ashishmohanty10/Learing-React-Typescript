import { Component, ReactNode } from "react";

type CounterProp = {
  message: string;
};

type CounterState = {
  count: number;
};

export class Counter extends Component<CounterProp, CounterState> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render(): ReactNode {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message} {this.state.count}
      </div>
    );
  }
}
