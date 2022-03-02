import { createElement as ce } from 'react';
import { Styles } from './Bare.styles';
import { BareComponent } from './Bare.types';

export const Bare: BareComponent = (props) =>
  ce('div', { className: Styles().root, ...props });

export default Bare;
