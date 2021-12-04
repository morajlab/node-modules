import type { HTMLAttributes } from "react";
import type { MLComponent } from "@morajlab/npm.react.types.common";

export interface IBareProps extends HTMLAttributes<HTMLDivElement> {
  /** Should be this a bare component */
  bare?: boolean;
}

export type BareComponent = MLComponent<IBareProps>;
