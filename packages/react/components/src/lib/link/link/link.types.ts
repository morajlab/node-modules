import type { IBareProps } from '@morajlab/react.components.bare';
import type { MLComponent } from '@morajlab/react.types.common';

export interface ILinkStyleProps {}

export interface ILinkProps extends ILinkStyleProps, IBareProps {
  href: string;
  selectable?: boolean;
}

export type LinkComponent = MLComponent<ILinkProps>;
