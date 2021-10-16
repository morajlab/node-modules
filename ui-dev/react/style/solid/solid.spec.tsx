import React from 'react';
import { render } from '@testing-library/react';
import { BasicSolid } from './solid.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicSolid />);
  const rendered = getByText('hello from Solid');
  expect(rendered).toBeTruthy();
});
