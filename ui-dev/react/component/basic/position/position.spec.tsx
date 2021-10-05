import React from 'react';
import { render } from '@testing-library/react';
import { BasicPosition } from './position.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicPosition />);
  const rendered = getByText('hello from Position');
  expect(rendered).toBeTruthy();
});
