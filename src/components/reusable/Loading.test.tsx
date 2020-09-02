import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';

describe('Loading component', () => {
  it('should render loading icon', () => {
    render(<Loading />);

    expect(screen.getByRole("status")).toBeInstanceOf(HTMLElement);
  });
});
