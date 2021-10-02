import { createElement } from "react";
import { Bare } from "@ui-dev/component.bare";
import { Styles } from "./text.styles";
import type { TextComponent } from "./text.types";

export const Text: TextComponent = ({
  as,
  fontFamily,
  selectable,
  ...rest
}) => {
  const element = as ?? Bare;
  const { root } = Styles({ fontFamily, selectable });

  return createElement(element, { ...root, ...rest });
};
