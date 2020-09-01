import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Index from './index';
import { mockImageQuery } from '@globals/testConstants';
import { searchBarAltText, hideLockedCardsButtonText } from '@globals/constants';

describe('Account manager view component', () => {
  it('should render the search box', () => {
    render(<Index data={mockImageQuery} />);

    expect(screen.getByAltText(searchBarAltText)).toBeInstanceOf(HTMLInputElement);
  });

  it('should render the employee list', () => {
    render(<Index data={mockImageQuery} />);

    expect(screen.getByText(hideLockedCardsButtonText)).toBeInstanceOf(HTMLButtonElement);
  });

});
