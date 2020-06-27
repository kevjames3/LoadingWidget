import React from "react";
import { render, getByLabelText } from "@testing-library/react";
import renderer from "react-test-renderer";
import SpinnerWidgetController from "./SpinnerWidgetController";

describe("SpinnerWidgetContoller", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SpinnerWidgetController />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("handles the default value correctly", () => {
    const { container } = render(<SpinnerWidgetController />);
    expect(container.querySelector(".percentage-input input")).toHaveValue(0);
  });

  it("handles the different starting values", () => {
    const { container } = render(<SpinnerWidgetController value={25} />);
    expect(container.querySelector(".percentage-input input")).toHaveValue(25);
  });
});
