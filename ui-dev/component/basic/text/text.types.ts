import type { IBareProps } from "@morajlab/ui-dev.component.basic.bare";
import type { MLComponent } from "@morajlab/ui-dev.type.common";

export interface ITextStyleProps {
  fontFamily?: string;
  selectable?: boolean;
  as?: string;
}

export interface ITextProps extends ITextStyleProps, IBareProps {}

export type TextComponent = MLComponent<ITextProps>;