import React from "react";
import "./styles/App.css";
import SpinnerWidget from "./components/SpinnerWidget/SpinnerWidget";
import SpinnerWidgetController from "./components/SpinnerWidgetController/SpinnerWidgetController";

function Demo() {
  return (
    <React.Fragment>
      <SpinnerWidget />
      <hr />
      <SpinnerWidgetController />
    </React.Fragment>
  );
}

export default Demo;
