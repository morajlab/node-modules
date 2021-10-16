import React from 'react';
import { render } from '@testing-library/react';
import { BasicRectangle } from './rectangle.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicRectangle />);
  const rendered = getByText('hello from Rectangle');
  expect(rendered).toBeTruthy();
});
