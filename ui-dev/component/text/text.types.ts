import type { IMLComponentProps, MLComponent } from "@ui-dev/type.common";

export interface ITextStyleProps {
  fontFamily?: string;
  selectable?: boolean;
  as?: string;
}

export interface ITextProps extends ITextStyleProps, IMLComponentProps {}

export type TextComponent = MLComponent<ITextProps>;
