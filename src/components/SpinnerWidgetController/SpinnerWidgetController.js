import React, { Component } from "react";
import "./styles/main.css";

class SpinnerWidgetController extends Component {
  render() {
    return (
      <div className="spinner-widget-controls">
        <div>
          <label>Spinning</label>
          <select
            onChange={(event) => {
              this.props.onSpinningChange(event.target.value);
            }}
            defaultValue={this.props.spinning}
          >
            <option value={true}>Keep Spinning</option>
            <option value={false}>Don't Spin</option>
          </select>
        </div>
        <div>
          <label>Current value</label>
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
