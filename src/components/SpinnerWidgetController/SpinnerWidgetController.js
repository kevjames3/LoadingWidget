import React, { Component } from "react";
import "./styles/main.css";

class SpinnerWidgetController extends Component {
  render() {
    return (
      <div className="spinner-widget-controls">
        <div>
          <button onClick={() => this.props.onSpinningChange(true)}>
            Keep Spinning
          </button>
          <button onClick={() => this.props.onSpinningChange(false)}>
            Stop Spinning
          </button>
        </div>
        <div>
          <label>Current percentage</label>
          <input
            type="Number"
            defaultValue={this.props.value}
            onInput={(event) => {
              this.props.onValueChange(event.target.value);
            }}
            min="0"
            max="100"
          ></input>
        </div>
      </div>
    );
  }
}

export default SpinnerWidgetController;
