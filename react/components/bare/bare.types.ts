import type { HTMLAttributes } from "react";
import type { MLComponent } from "@morajlab/react.types.common";

export interface IBareStyleProps {}

export interface IBareProps
  extends IBareStyleProps,
    HTMLAttributes<HTMLDivElement> {
  /** Should be this a bare component */
  bare?: boolean;
}

export type BareComponent = MLComponent<IBareProps>;
