import { createStyles } from '@morajlab/react.utils.style';
import type { ITextStyleProps } from './text.types';

export const Styles = ({ fontFamily }: ITextStyleProps) =>
  createStyles({
    root: {
      ...(fontFamily ? { fontFamily } : {}),
    },
  })();

export default Styles;
