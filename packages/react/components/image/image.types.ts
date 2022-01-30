import { ReactNode } from "react";
import type { IBareProps } from "@morajlab/react.components.bare";
import type { MLComponent } from "@morajlab/react.types.common";

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
