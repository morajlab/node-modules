import type { IBareProps } from "@morajlab/ui-dev.component.basic.bare";
import type { MLComponent } from "@morajlab/ui-dev.type.common";

export interface IButtonStyleProps {}

export interface IButtonProps extends IButtonStyleProps, IBareProps {}

export type ButtonComponent = MLComponent<IButtonProps>;
