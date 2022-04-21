import type { HTMLAttributes } from 'react';
import type { MLComponent } from '@morajlab/npm.react.types.common';

export interface IBareProps extends HTMLAttributes<HTMLDivElement> {
  bare?: boolean;
}
export type BareComponent = MLComponent<IBareProps>;
