import React, { Component } from "react";
import "./styles/main.css";

class SpinnerWidgetController extends Component {
  render() {
    return (
      <div className="spinner-widget-controls">
        <div className="button-controls">
          <button
            className="start-spinning"
            onClick={() => this.props.onSpinningChange(true)}
          >
            Keep Spinning
          </button>
          <button
            className="stop-spinning"
            onClick={() => this.props.onSpinningChange(false)}
          >
            Stop Spinning
          </button>
        </div>
        <div className="percentage-input">
          <label>Current percentage</label>
          <input
            type="Number"
            defaultValue={this.props.value === undefined ? 0 : this.props.value}
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
