import React, { createElement } from "react";
import { Styles } from "./bare.styles";
import { BareComponent } from "./bare.types";

export const Bare: BareComponent = ({ ...rest }) => {
  const { root } = Styles();

  return createElement("div", { className: root, ...rest });
};
