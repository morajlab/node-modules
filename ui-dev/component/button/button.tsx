import React from "react";
import { Text } from "@ui-dev/component.text";
import type { ButtonComponent } from "./button.types";

export const Button: ButtonComponent = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      <Text selectable={false}>{children}</Text>
    </div>
  );
};
