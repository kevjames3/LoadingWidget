import React, { Component } from "react";
import "./styles/main.css";

class SpinnerWidgetController extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="spinner-widget-controls">
        <div>
          <label>Spinning</label>
          <select
            onChange={(event) => {
              this.props.onSpinningChange(event.target.value);
            }}
          >
            <option defaultValue value="true">
              Keep Spinning
            </option>
            <option value="false">Don't Spin</option>
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
          ></input>
        </div>
      </div>
    );
  }
}

export default SpinnerWidgetController;
