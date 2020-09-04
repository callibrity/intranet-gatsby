import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Index from './index';
import { mockImageQuery, mockAllEmployeeList } from '@globals/testConstants';
import { searchBarPlaceholder, hideLockedCardsButtonText, billableTitle, growthTitle } from '@globals/constants';
import '@testing-library/jest-dom'

const queryImageCardList = () => screen.queryAllByRole('img', { name: /Image of/i });
const queryBillableCardList = () => screen.queryAllByText(billableTitle);
const queryGrowthCardList = () => screen.queryAllByText(growthTitle);
const queryCurrentHours = () => screen.getAllByText(/current hours:/i);
const queryCurrentTarget = () => screen.getAllByText(/current target:/i);
const queryTotalTarget = () => screen.getAllByText(/total target:/i);
const queryHoursUsed = () => screen.getAllByText(/hours used:/i);
const queryHoursRemaining = () => screen.getAllByText(/hours remaining:/i);
const queryTotalGrowth = () => screen.getAllByText(/total growth:/i);

test('Account manager view', async () => {
  // it should initially render the search bar, hide locked cards button, and separation bar
  render(<Index data={mockImageQuery} />);

  const searchBar = await screen.findByRole('textbox', { name: searchBarPlaceholder })
  const hideLockedCardsButton = screen.getByRole('button', { name: hideLockedCardsButtonText });
  const separationBar = screen.getByRole('separator');

  expect(searchBar).toBeInstanceOf(HTMLInputElement);
  expect(hideLockedCardsButton).toBeInstanceOf(HTMLButtonElement);
  expect(separationBar).toBeInstanceOf(HTMLElement);

  // it should initially not have any employee cards
  expect(queryImageCardList()).toHaveLength(0);
  expect(queryBillableCardList()).toHaveLength(0);
  expect(queryGrowthCardList()).toHaveLength(0);

  // it should display the correct number of image cards after two characters are added to the search bar
  userEvent.type(searchBar, 'te');

  const expectedRowNumber = mockAllEmployeeList.length;

  expect(queryImageCardList()).toHaveLength(expectedRowNumber);
  expect(queryBillableCardList()).toHaveLength(expectedRowNumber);
  expect(queryGrowthCardList()).toHaveLength(expectedRowNumber);

  // it should display the image cards with their name and image
  const firstEmployeeName = screen.getByText(mockAllEmployeeList[0].employeeName);
  const firstEmployeeImage = screen.getByRole('img', {name: `Image of ${mockAllEmployeeList[0].employeeName}`})
  let lockButton = screen.getByRole('button', {name: `${mockAllEmployeeList[0].employeeName}-unlocked`});

  expect(firstEmployeeName).toBeInstanceOf(HTMLElement);
  expect(firstEmployeeImage).toBeInstanceOf(HTMLImageElement);
  expect(lockButton).toBeInstanceOf(HTMLButtonElement);

  // it should display metric info
  expect(queryCurrentHours()).toHaveLength(expectedRowNumber);
  expect(queryCurrentTarget()).toHaveLength(expectedRowNumber);
  expect(queryTotalTarget()).toHaveLength(expectedRowNumber);
  expect(queryHoursUsed()).toHaveLength(expectedRowNumber);
  expect(queryHoursRemaining()).toHaveLength(expectedRowNumber);
  expect(queryTotalGrowth()).toHaveLength(expectedRowNumber);

  // it should toggle the lock button
  userEvent.click(lockButton);
  lockButton = screen.getByRole('button', {name: `${mockAllEmployeeList[0].employeeName}-locked`});
  expect(lockButton).toBeInstanceOf(HTMLButtonElement);
  userEvent.click(lockButton);

  // it should collapse the locked accordion on button click
  const acc = screen.getByTestId('accordion');
  expect(acc).toBeInstanceOf(HTMLElement);
  expect(acc).toHaveClass('collapse show');

  userEvent.click(hideLockedCardsButton);
  
  expect(acc).toHaveClass('collapsing');
})
