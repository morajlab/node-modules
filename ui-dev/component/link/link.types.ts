import type { IBareProps } from "@ui-dev/component.bare";
import type { MLComponent } from "@ui-dev/type.common";

export interface ILinkStyleProps {}

export interface ILinkProps extends ILinkStyleProps, IBareProps {
  href: string;
  selectable?: boolean;
}

export type LinkComponent = MLComponent<ILinkProps>;
