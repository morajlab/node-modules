import { createElement } from "react";
import { Bare } from "@morajlab/react.components.bare";
import { Styles } from "./text.styles";
import { common } from "@morajlab/react.styles.common";
import type { TextComponent } from "./text.types";

export const Text: TextComponent = ({
  as,
  fontFamily,
  selectable,
  ...rest
}) => {
  selectable = selectable ?? true;
  const element = as ?? Bare;
  const { root } = Styles({ fontFamily });

  return createElement(element, {
    className: `${root} ${!selectable ? common().noSelect : ""}`.trim(),
    ...rest,
  });
};
