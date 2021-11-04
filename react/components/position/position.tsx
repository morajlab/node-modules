import React from "react";
import { Bare } from "@morajlab/react.components.bare";
import { Styles } from "./position.styles";
import type { PositionComponent } from "./position.types";

export const Position: PositionComponent = ({ type, pos, ...rest }) => {
  const { root } = Styles({
    type,
    pos,
  });

  return <Bare {...root} {...rest} />;
};
