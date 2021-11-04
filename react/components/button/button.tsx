import React, { createElement } from "react";
import { Text } from "@morajlab/react.components.text";
import { Bare } from "@morajlab/react.components.bare";
import { Styles } from "./button.styles";
import type { ButtonComponent } from "./button.types";

export const Button: ButtonComponent = ({ bare, children, ...rest }) => {
  bare = bare ?? true;

  const element = bare ? Bare : "button";
  const { root } = Styles();

  return createElement(
    element,
    { ...root, ...rest },
    <Text selectable={false}>{children}</Text>
  );
};
