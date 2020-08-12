import React from 'react';
import { mount } from 'enzyme';
import TimeTracker from '@home/TimeTracker';
import { UserContext } from '@globals/contexts';

import Home from '.';

const contextProps = {
  userRole: 'Developer',
};
describe('Home page', () => {
  it('should render TimeTracker', () => {
    const wrapper = mount(
    <UserContext.Provider value={contextProps}>
      <Home />
    </UserContext.Provider>);

    expect(wrapper.find(TimeTracker).exists()).toEqual(true);
  });
});
