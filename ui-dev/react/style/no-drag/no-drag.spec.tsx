import React from 'react';
import { render } from '@testing-library/react';
import { BasicNoDrag } from './no-drag.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicNoDrag />);
  const rendered = getByText('hello from NoDrag');
  expect(rendered).toBeTruthy();
});
