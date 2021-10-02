import type { HTMLAttributes } from "react";
import type { MLComponent } from "@ui-dev/type.common";

export interface IBareStyleProps {}

export interface IBareProps
  extends IBareStyleProps,
    HTMLAttributes<HTMLDivElement> {}

export type BareComponent = MLComponent<IBareProps>;
