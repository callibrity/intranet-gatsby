import React, { useContext } from 'react';
import { mount } from 'enzyme';
import TimeTracker from '@home/TimeTracker';
import { UserContext } from '@globals/contexts';

const contextPropsDeveloper = {
  userRole: 'Developer',
};
const contextPropsAccountManager = {
  userRole: 'Account Manager',
};

describe('TimeTracker component', () => {
  it('renders two cards for user role Developer', () => {
    const wrapper = mount(
      <UserContext.Provider value={contextPropsDeveloper}>
        <TimeTracker />
      </UserContext.Provider>,
    );

    expect(wrapper.find('Card').exists()).toEqual(true);
  });

  it('renders more than two cards for user role Account Manager', () => {
    const wrapper = mount(
      <UserContext.Provider value={contextPropsAccountManager}>
        <TimeTracker />
      </UserContext.Provider>,
    );

    expect(wrapper.find('Card').exists()).toEqual(true);
  });
});
