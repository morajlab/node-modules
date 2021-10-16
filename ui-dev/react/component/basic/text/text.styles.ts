import { style } from "@morajlab/ui-dev.react.util.style";
import type { ITextStyleProps } from "./text.types";

export const Styles = ({ fontFamily }: ITextStyleProps) => {
  return {
    root: style({
      ...(fontFamily ? { fontFamily } : {}),
    }),
  };
};

export default Styles;
