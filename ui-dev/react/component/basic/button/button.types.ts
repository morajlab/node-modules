import type { IBareProps } from "@morajlab/ui-dev.react.component.basic.bare";
import type { MLComponent } from "@morajlab/ui-dev.react.type.common";

export interface IButtonStyleProps {}

export interface IButtonProps extends IButtonStyleProps, IBareProps {}

export type ButtonComponent = MLComponent<IButtonProps>;
