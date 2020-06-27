import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import renderer from "react-test-renderer";
import Demo from "./Demo";

describe("Demo", () => {
  let container;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Demo />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("start/stops the widget from spinning when I click the buttons", () => {
    act(() => {
      ReactDOM.render(<Demo />, container);
    });

    const stopButton = container.querySelector(".stop-spinning");
    const startButton = container.querySelector(".start-spinning");
    expect(container.querySelector("svg.animate")).toBeTruthy();

    act(() => {
      stopButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(container.querySelector("svg.pause-animate")).toBeTruthy();

    act(() => {
      startButton.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(container.querySelector("svg.animate")).toBeTruthy();
  });

  it("updates the number correctly", () => {
    act(() => {
      ReactDOM.render(<Demo />, container);
    });

    let input = container.querySelector(".percentage-input input");
    let displayedNumber = container.querySelector(".spinner_widget div.status");

    expect(input).toHaveValue(0);
    expect(displayedNumber.textContent).toBe("0%");

    act(() => {
      input.value = 25;
      input.dispatchEvent(new MouseEvent("input", { bubbles: true }));
    });

    expect(input).toHaveValue(25);
    expect(displayedNumber.textContent).toBe("25%");
  });
});
