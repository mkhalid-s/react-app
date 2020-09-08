import React from 'react';
import { render } from '@testing-library/react';
import App from './index';

test('renders tv series list', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/TV Series List/i);
  expect(linkElement).toBeInTheDocument();
});
