import { createElement } from "react";
import { Bare } from "@morajlab/react.components.bare";
import { NoSelect } from "@morajlab/react.styles.no-select";
import { Styles } from "./text.styles";
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
    ...root,
    ...rest,
    ...(!selectable ? NoSelect() : {}),
  });
};
