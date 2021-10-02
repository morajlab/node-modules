import type { IBareProps } from "@ui-dev/component.bare";
import type { MLComponent } from "@ui-dev/type.common";

export interface IButtonStyleProps {}

export interface IButtonProps extends IButtonStyleProps, IBareProps {
  bare?: boolean;
}

export type ButtonComponent = MLComponent<IButtonProps>;
