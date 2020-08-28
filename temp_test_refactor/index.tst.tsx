import React from 'react';
import { mount } from 'enzyme';
import TimeTracker from '@home/TimeTracker';
import { UserContext } from '@globals/contexts';
import { mockUserContext, mockImageQuery } from '@globals/testConstants';

import Home from '.';

describe('Home page', () => {
  it('should render TimeTracker', () => {
    const wrapper = mount(
    <UserContext.Provider value={mockUserContext}>
      <Home data={mockImageQuery}/>
    </UserContext.Provider>);

    expect(wrapper.find(TimeTracker).exists()).toEqual(true);
  });
});