import { createElement } from "react";
import { Bare } from "@morajlab/ui-dev.react.component.basic.bare";
import { NoSelect } from "@morajlab/ui-dev.react.style.no-select";
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
