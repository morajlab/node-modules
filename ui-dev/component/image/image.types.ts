import { ReactNode } from "react";
import type { IBareProps } from "@ui-dev/component.bare";
import type { MLComponent } from "@ui-dev/type.common";

export interface IImageStyleProps {
  src: string;
  bare?: boolean;
  width?: number;
  height?: number;
}

export interface IImageProps extends IImageStyleProps, IBareProps {
  alt?: string | ReactNode;
}

export type ImageComponent = MLComponent<IImageProps>;
