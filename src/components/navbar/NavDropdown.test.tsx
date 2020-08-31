import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NavDropdown from './NavDropdown';
import { mockNavDropdownProps } from '@globals/testConstants';

const mockItemsText = ['itemText1', 'itemText2', 'itemText3'];
const mockItems = mockItemsText.map(item => <div>{item}</div>)

describe('NavDropdown component', () => {
  it('should display the dropdown label and should not display the items by default', () => {
    render(<NavDropdown label="testLabel" items={mockItems} />);

    expect(screen.getByText(mockNavDropdownProps.label)).toBeInstanceOf(HTMLElement);
    expect(screen.queryByText(mockItemsText[0])).toBeNull();
  });

  it('should display the list of items after the label is clicked', async () => {
    render(<NavDropdown label="testLabel" items={mockItems} />);

    const expectedDropdownLabel = screen.getByText(mockNavDropdownProps.label);

    fireEvent.click(expectedDropdownLabel);

    await waitFor(() => expect(screen.queryByText(mockItemsText[0])).toBeInstanceOf(HTMLElement));
  });
});
