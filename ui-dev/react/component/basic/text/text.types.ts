import type { IBareProps } from "@morajlab/ui-dev.react.component.basic.bare";
import type { MLComponent } from "@morajlab/ui-dev.react.type.common";

export interface ITextStyleProps {
  fontFamily?: string;
  as?: string;
}

export interface ITextProps extends ITextStyleProps, IBareProps {
  selectable?: boolean;
}

export type TextComponent = MLComponent<ITextProps>;
