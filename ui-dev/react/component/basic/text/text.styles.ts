import { style } from "@morajlab/ui-dev.react.utils.style";
import type { ITextStyleProps } from "./text.types";

export const Styles = ({ fontFamily, selectable }: ITextStyleProps) => {
  selectable = selectable ?? true;

  return {
    root: style({
      ...(fontFamily ? { fontFamily } : {}),
      ...(!selectable ? { userSelect: "none" } : {}),
    }),
  };
};

export default Styles;
