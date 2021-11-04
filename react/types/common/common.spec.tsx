import React from "react";
import { render } from "@testing-library/react";
import { BasicMLComponent } from "./common.composition";

it("should render with the correct text", () => {
  const { getByText } = render(<BasicMLComponent />);
  const rendered = getByText("Basic ML Component");

  expect(rendered).toBeTruthy();
});
