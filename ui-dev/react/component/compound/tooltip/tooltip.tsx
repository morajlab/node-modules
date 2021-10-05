import React, { cloneElement } from "react";
import { Bare } from "@morajlab/ui-dev.react.component.basic.bare";
import { Styles } from "./tooltip.styles";
import type { TooltipComponent } from "./tooltip.types";

export const Tooltip: TooltipComponent = ({ target, ...rest }) => {
  const { root } = Styles();
  const clonedTarget = cloneElement(target as any);

  return <Bare {...root} {...rest} />;
};
