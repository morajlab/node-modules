import React from "react";
import { render } from "@testing-library/react";
import { BasicStyle } from "./style.composition";

describe("Style utility tests", () => {
  it("Should render with the correct style", () => {
    const styles = {
      root: {
        padding: "60px",
        backgroundColor: "rgb(0, 53, 0)",
        display: "block",
        color: "rgb(255, 255, 255)",
        borderRadius: "50px",
      },
    };
    const text = JSON.stringify(styles);

    const { getByText } = render(
      <BasicStyle styles={styles} children={text} />
    );
    const rendered = getByText(text);

    expect(rendered).toBeTruthy();

    const computedStyles = window.getComputedStyle(rendered.parentElement);

    for (const [key, value] of Object.entries(styles.root)) {
      expect(computedStyles[key]).toBe(value);
    }
  });
});
