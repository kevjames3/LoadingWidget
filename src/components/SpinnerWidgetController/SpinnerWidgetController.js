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
          <select>
            <option selected>Keep Spinning</option>
            <option>Don't Spin</option>
          </select>
        </div>
        <div>
          <label>Current value</label>
          <input type="Number"></input>
        </div>
      </div>
    );
  }
}

export default SpinnerWidgetController;
