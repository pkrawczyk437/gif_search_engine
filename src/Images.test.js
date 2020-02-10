import React from 'react';
import { render } from '@testing-library/react';
import Images from './components/Images';

test('renders learn react link', () => {
  const { getByText } = render(<Images />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
