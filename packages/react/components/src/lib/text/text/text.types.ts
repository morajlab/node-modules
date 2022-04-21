import type { IBareProps } from '@morajlab/react.components.bare';
import type { MLComponent } from '@morajlab/react.types.common';

export interface ITextStyleProps {
  fontFamily?: string;
  as?: string;
}

export interface ITextProps extends ITextStyleProps, IBareProps {
  selectable?: boolean;
}

export type TextComponent = MLComponent<ITextProps>;
