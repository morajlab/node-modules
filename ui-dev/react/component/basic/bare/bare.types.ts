import type { HTMLAttributes } from "react";
import type { MLComponent } from "@morajlab/ui-dev.react.type.common";

export interface IBareStyleProps {}

export interface IBareProps
  extends IBareStyleProps,
    HTMLAttributes<HTMLDivElement> {
  /** Should be this a bare component */
  bare?: boolean;
}

export type BareComponent = MLComponent<IBareProps>;
