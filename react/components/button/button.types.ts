import type { IBareProps } from "@morajlab/react.components.bare";
import type { MLComponent } from "@morajlab/react.types.common";

export interface IButtonStyleProps {}

export interface IButtonProps extends IButtonStyleProps, IBareProps {}

export type ButtonComponent = MLComponent<IButtonProps>;
