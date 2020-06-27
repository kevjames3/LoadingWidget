import React, { Component } from "react";
import "./styles/widget.css";

class SpinnerWidget extends Component {
  constructor(props) {
    super(props);
    this.maxFill = 158;
  }
  render() {
    return (
      <div className="spinner-widget">
        <svg
          height="100%"
          width="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className={
            this.props.spinning === true || this.props.spinning === true
              ? "animate"
              : "pause-animate"
          }
        >
          <circle
            className="outer-circle"
            r="25"
            cx="50"
            cy="50"
            style={{
              strokeDasharray: `${Math.ceil(
                ((this.props.value === undefined ? 0 : this.props.value) /
                  100) *
                  this.maxFill
              )} ${this.maxFill}`,
            }}
          />
          <circle className="inner_circle" r="45" cx="50" cy="50" />
        </svg>
        <div className="status">
          {this.props.value === undefined ? 0 : this.props.value}%
        </div>
      </div>
    );
  }
}

export default SpinnerWidget;
