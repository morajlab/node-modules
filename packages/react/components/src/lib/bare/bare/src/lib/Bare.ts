import { createElement as ce } from 'react';
import { mergeProps } from '@morajlab/npm.react.utils.merge-props';
import { Styles } from './Bare.styles';
import { BareComponent } from './Bare.types';

export const Bare: BareComponent = (props) =>
  ce('div', mergeProps(props, { className: Styles().root }));

// export const BareFn: BareComponent = (props) => ce(Bare, props);

export default Bare;
