import type { HTMLAttributes } from "react";
import type { MLComponent } from "@ui-dev/type.common";

export interface IBareStyleProps {}

export interface IBareProps
  extends IBareStyleProps,
    HTMLAttributes<HTMLDivElement> {
  bare?: boolean;
}

export type BareComponent = MLComponent<IBareProps>;
