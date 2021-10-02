import { style } from "@ui-dev/utils.style";
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
