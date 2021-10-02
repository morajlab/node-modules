import type { IMLComponentProps, MLComponent } from "@ui-dev/type.common";

export interface IButtonStyleProps {}

export interface IButtonProps extends IButtonStyleProps, IMLComponentProps {}

export type ButtonComponent = MLComponent<IButtonProps>;
