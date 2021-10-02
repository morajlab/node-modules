import React from 'react';
import { render } from '@testing-library/react';
import { BasicStyle } from './style.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicStyle />);
  const rendered = getByText('hello from Style');
  expect(rendered).toBeTruthy();
});
