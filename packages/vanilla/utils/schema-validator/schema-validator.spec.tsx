import React from "react";
import { render } from "@testing-library/react";
import { BasicSchemaValidator } from "./schema-validator.composition";

it("should render with the correct text", () => {
  const { getByText } = render(<BasicSchemaValidator />);
  const rendered = getByText("hello from SchemaValidator");
  expect(rendered).toBeTruthy();
});
