import { createStyles } from "@morajlab/react.utils.style";

const basic = {
  noDrag: {
    WebkitUserDrag: "none",
  },
  noSelect: {
    userSelect: "none",
  },
  coverSize: {
    width: "100%",
    height: "100%",
  },
};

const complex = {
  solid: { ...basic.noDrag, ...basic.noSelect },
};

export const common = createStyles({ ...basic, ...complex });
