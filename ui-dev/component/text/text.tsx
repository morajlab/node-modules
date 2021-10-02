import { createElement } from "react";
import { Styles } from "./text.styles";
import type { TextComponent } from "./text.types";

export const Text: TextComponent = ({
  as,
  fontFamily,
  selectable,
  ...rest
}) => {
  as = as ?? "div";

  const { root } = Styles({ as, fontFamily, selectable });

  return createElement(as, { ...root, ...rest });
};
