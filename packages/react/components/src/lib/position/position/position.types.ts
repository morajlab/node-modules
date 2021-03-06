import type { IBareProps } from '@morajlab/react.components.bare';
import type { MLComponent } from '@morajlab/react.types.common';

export interface IPositionStyleProps {
  type: 'fixed' | 'absolute';
  pos?:
    | 'full'
    | 'top'
    | 'top-middle'
    | 'right'
    | 'right-middle'
    | 'bottom'
    | 'bottom-middle'
    | 'left'
    | 'left-middle'
    | 'top-right'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-left'
    | 'center';
}

export interface IPositionProps extends IPositionStyleProps, IBareProps {}

export type PositionComponent = MLComponent<IPositionProps>;
