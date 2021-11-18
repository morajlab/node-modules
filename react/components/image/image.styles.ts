import { createStyles } from "@morajlab/react.utils.style";
import type { IImageStyleProps } from "./image.types";

export const Styles = ({ src, bare, width, height }: IImageStyleProps) => {
  return createStyles({
    root: {
      ...(bare
        ? {
            width: `${width}px`,
            height: `${height}px`,
            backgroundImage: `url(${src})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }
        : {}),
    },
  })();
};

export default Styles;
