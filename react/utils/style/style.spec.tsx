import React from "react";
import { render } from "@testing-library/react";
import { createStyles } from "./style";

describe("Style utility tests", () => {
  it("Should render with the correct style", () => {
    const styles = {
      root: {
        backgroundColor: "rgb(0, 233, 15)",
        color: "rgb(255, 255, 255)",
        fontSize: "12px",
      },
    };
    const { root } = createStyles(styles)();
    const StyledComponent = () => <div className={root} />;

    render(<StyledComponent />);

    const computedStyles = getRenderedComponentStyles(StyledComponent());

    for (const [key, value] of Object.entries(styles)) {
      expect(computedStyles[key]).toBe(value);
    }
  });
});
