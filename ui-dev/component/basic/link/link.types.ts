import type { IBareProps } from "@morajlab/ui-dev.component.basic.bare";
import type { MLComponent } from "@morajlab/ui-dev.type.common";

export interface ILinkStyleProps {}

export interface ILinkProps extends ILinkStyleProps, IBareProps {
  href: string;
  selectable?: boolean;
}

export type LinkComponent = MLComponent<ILinkProps>;