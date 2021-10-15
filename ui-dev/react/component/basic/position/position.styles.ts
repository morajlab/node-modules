import { style } from "@morajlab/ui-dev.react.util.style";
import type { IPositionStyleProps } from "./position.types";

export const Styles = ({ type, pos }: IPositionStyleProps) => {
  const positions = {
    top: { inset: "0 0 50% 0" },
    "top-left": { inset: "0 50% 50% 0" },
    "top-middle": { inset: "0 25% 50% 25%" },
    "top-right": { inset: "0 0 50% 50%" },
    right: { inset: "0 0 0 50%" },
    "right-middle": { inset: "25% 0 25% 50%" },
    bottom: { inset: "50% 0 0 0" },
    "bottom-left": { inset: "50% 50% 0 0" },
    "bottom-middle": { inset: "50% 25% 0 25%" },
    "bottom-right": { inset: "50% 0 0 50%" },
    left: { inset: "0 50% 0 0" },
    "left-middle": { inset: "25% 50% 25% 0" },
    center: { inset: "25% 25% 25% 25%" },
    full: { inset: 0 },
  };

  return {
    root: style({ position: type, ...(positions[pos] ?? {}) }),
  };
};

export default Styles;
