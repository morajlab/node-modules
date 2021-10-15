import React from "react";
import { render } from "@testing-library/react";
import { style, getRenderedComponentStyles } from "./style";

describe("Style utility tests", () => {
  it("Should render with the correct style", () => {
    const styles = {
      backgroundColor: "rgb(0, 233, 15)",
      color: "rgb(255, 255, 255)",
      fontSize: "12px",
    };

    const StyledComponent = () => <div {...style(styles)} />;

    render(<StyledComponent />);

    const computedStyles = getRenderedComponentStyles(StyledComponent());

    for (const [key, value] of Object.entries(styles)) {
      expect(computedStyles[key]).toBe(value);
    }
  });
});
