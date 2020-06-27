import React, { Component } from "react";
import "./styles/widget.css";

class SpinnerWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="spinner_widget">
        <svg
          height="100%"
          width="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <circle className="outer_circle" r="25" cx="50" cy="50" />.
          <circle className="inner_circle" r="40" cx="50" cy="50" />
        </svg>
        <div className="status">13%</div>
      </div>
    );
  }
}

export default SpinnerWidget;
