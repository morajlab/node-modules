import { style } from "@ui-dev/utils.style";
import type { IImageStyleProps } from "./image.types";

export const Styles = ({ src, bare, width, height }: IImageStyleProps) => {
  return {
    root: style({
      userDrag: "none",
      WebkitUserDrag: "none",
      userSelect: "none",
      ...(bare
        ? {
            width: `${width}px`,
            height: `${height}px`,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }
        : {}),
    }),
  };
};

export default Styles;
