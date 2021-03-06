import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import Index from './index';
import { mockImageQuery, mockAllEmployeeList } from '@globals/testConstants';
import { searchBarPlaceholder, pinnedCardsText, billableTitle, growthTitle, consultantSearchText, searchResultsText } from '@globals/constants';
import '@testing-library/jest-dom'

const queryImageCardList = () => screen.queryAllByRole('img', { name: /Image of/i });
const queryBillableCardList = () => screen.queryAllByText(billableTitle);
const queryGrowthCardList = () => screen.queryAllByText(growthTitle);
const queryCurrentHours = () => screen.getAllByText('Current Hours');
const queryCurrentTarget = () => screen.getAllByText('Current Target');
const queryTotalTarget = () => screen.getAllByText('Total Target');
const queryHoursUsed = () => screen.getAllByText('Hours Used');
const queryHoursRemaining = () => screen.getAllByText('Hours Left');
const queryTotalGrowth = () => screen.getAllByText('Total Growth');

test('Account manager view', async () => {
  // it should initially render the search bar, do not show the hide locked cards button and separation bar
  render(<Index data={mockImageQuery} />);

  const searchHeader = await screen.findByRole('heading', { name: consultantSearchText });
  const searchBar = await screen.findByRole('textbox', { name: searchBarPlaceholder });
  const showAllButton = screen.getByTestId('show-all-button');
  let pinnedCardsButton = screen.queryByRole('button', { name: pinnedCardsText });
  let separationBar = screen.queryByRole('separator');

  expect(searchHeader).toBeInstanceOf(HTMLHeadingElement);
  expect(searchBar).toBeInstanceOf(HTMLInputElement);
  expect(showAllButton).toBeInstanceOf(HTMLButtonElement);
  expect(pinnedCardsButton).toBeNull;
  expect(separationBar).toBeNull;

  // it should initially not have any employee cards
  expect(queryImageCardList()).toHaveLength(0);
  expect(queryBillableCardList()).toHaveLength(0);
  expect(queryGrowthCardList()).toHaveLength(0);

  // it should display the correct number of image cards after two characters are added to the search bar
  userEvent.type(searchBar, 'te');

  const expectedResultQuantity = 2;
  const resultsHeader = await screen.findByRole('heading', { name: searchResultsText });

  expect(resultsHeader).toBeInstanceOf(HTMLHeadingElement);
  expect(queryImageCardList()).toHaveLength(expectedResultQuantity);
  expect(queryBillableCardList()).toHaveLength(expectedResultQuantity);
  expect(queryGrowthCardList()).toHaveLength(expectedResultQuantity);

  // it should show all cards after clicking "Show All" button
  userEvent.click(showAllButton);

  const expectedTotalQuantity = mockAllEmployeeList.length;

  expect(queryImageCardList()).toHaveLength(expectedTotalQuantity);
  expect(queryBillableCardList()).toHaveLength(expectedTotalQuantity);
  expect(queryGrowthCardList()).toHaveLength(expectedTotalQuantity);

  // it should display the image cards with their name and image
  const firstEmployeeName = screen.getByText(mockAllEmployeeList[0].employeeName);
  const firstEmployeeImage = screen.getByRole('img', { name: `Image of ${mockAllEmployeeList[0].employeeName}` })
  let lockButton = screen.getAllByRole('button', { name: `${mockAllEmployeeList[0].employeeName}-unlocked` });

  expect(firstEmployeeName).toBeInstanceOf(HTMLElement);
  expect(firstEmployeeImage).toBeInstanceOf(HTMLImageElement);
  expect(lockButton[0]).toBeInstanceOf(HTMLButtonElement);

  // it should display metric info
  expect(queryCurrentHours()).toHaveLength(expectedTotalQuantity);
  expect(queryCurrentTarget()).toHaveLength(expectedTotalQuantity);
  expect(queryTotalTarget()).toHaveLength(expectedTotalQuantity);
  expect(queryHoursUsed()).toHaveLength(expectedTotalQuantity);
  expect(queryHoursRemaining()).toHaveLength(expectedTotalQuantity);
  expect(queryTotalGrowth()).toHaveLength(expectedTotalQuantity);

  // it should toggle the lock button
  userEvent.click(lockButton[0]);
  lockButton = screen.getAllByRole('button', { name: `${mockAllEmployeeList[0].employeeName}-locked` });
  expect(lockButton[0]).toBeInstanceOf(HTMLButtonElement);

  // it should show collapse button and separator when locked cards exist
  pinnedCardsButton = screen.getByRole('button', { name: pinnedCardsText });
  separationBar = screen.getByRole('separator');
  expect(pinnedCardsButton).toBeInstanceOf(HTMLButtonElement);
  expect(separationBar).toBeInstanceOf(HTMLElement);


  // it should collapse the locked accordion on button click and change button text
  const acc = screen.getByTestId('accordion');
  expect(acc).toBeInstanceOf(HTMLElement);
  expect(acc).toHaveClass('collapse show');

  userEvent.click(pinnedCardsButton);

  expect(acc).toHaveClass('collapsing');
})
