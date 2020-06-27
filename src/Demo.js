import "./styles/App.css";
import SpinnerWidget from "./components/SpinnerWidget/SpinnerWidget";
import SpinnerWidgetController from "./components/SpinnerWidgetController/SpinnerWidgetController";
import React, { Component } from "react";

class Demo extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      spinning: true,
    };
  }

  onSpinningChange = (shouldSpin) => {
    console.log(shouldSpin);
    this.setState({ spinning: shouldSpin });
  };
  onValueChange = (newVal) => {
    this.setState({ value: newVal });
  };

  render() {
    return (
      <React.Fragment>
        <SpinnerWidget
          value={this.state.value}
          spinning={this.state.spinning}
        />
        <hr />
        <SpinnerWidgetController
          spinning={this.state.spinning}
          value={this.state.value}
          onSpinningChange={this.onSpinningChange}
          onValueChange={this.onValueChange}
        />
      </React.Fragment>
    );
  }
}

export default Demo;
