import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from './SearchBar';


describe('SearchBar component', () => {
  it('should display the search form', () => {
    render(<SearchBar />);

    expect(screen.getByAltText("search bar")).toBeInstanceOf(HTMLElement);
  });
});
