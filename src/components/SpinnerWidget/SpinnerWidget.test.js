import React from "react";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import SpinnerWidget from "./SpinnerWidget";

afterEach(cleanup);

describe("SpinnerWidget", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SpinnerWidget />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the default value correctly", () => {
    const { getByText } = render(<SpinnerWidget />);
    expect(getByText(/%/i).textContent).toBe("0%");
  });

  it("renders the correct value and the stroke array is correct", () => {
    const { getByText, container } = render(<SpinnerWidget value={55} />);
    expect(getByText(/%/i).textContent).toBe("55%");
    expect(container.querySelector(`circle.outer_circle`)).toHaveStyle(
      "stroke-dasharray: 87 158"
    );
  });

  it("animates when it is told not to", () => {
    const { container } = render(<SpinnerWidget value={55} spinning={false} />);
    expect(container.querySelector("svg.pause-animate")).toBeTruthy();
  });

  it("animates when it is told to", () => {
    const { container } = render(<SpinnerWidget value={55} spinning={true} />);
    expect(container.querySelector("svg.animate")).toBeTruthy();
  });
});
