import { style } from "@ui-dev/utils.style";
import type { ITextStyleProps } from "./text.types";

export const Styles = ({ as, fontFamily, selectable }: ITextStyleProps) => {
  selectable = selectable ?? true;
  const extraStyles = {
    margin: 0,
    padding: 0,
  };

  return {
    root: style({
      ...(as !== "div" ? extraStyles : {}),
      ...(fontFamily ? { fontFamily } : {}),
      ...(!selectable ? { userSelect: "none" } : {}),
    }),
  };
};

export default Styles;
