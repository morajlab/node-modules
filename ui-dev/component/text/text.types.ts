import type { IBareProps } from "@ui-dev/component.bare";
import type { MLComponent } from "@ui-dev/type.common";

export interface ITextStyleProps {
  fontFamily?: string;
  selectable?: boolean;
  as?: string;
}

export interface ITextProps extends ITextStyleProps, IBareProps {}

export type TextComponent = MLComponent<ITextProps>;
