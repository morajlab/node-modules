import { ReactNode } from "react";
import type { IBareProps } from "@morajlab/ui-dev.component.basic.bare";
import type { MLComponent } from "@morajlab/ui-dev.type.common";

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