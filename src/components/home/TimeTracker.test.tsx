import React, { useContext } from 'react';
import { mount } from 'enzyme';
import TimeTracker from '@home/TimeTracker';
import { UserContext } from '@globals/contexts';
import { mockImageQuery } from '@globals/testConstants';

const contextProps = {
  userRole: 'Developer',
};

describe('TimeTracker component', () => {
  it('renders two cards for user role Developer', () => {
    const wrapper = mount(
      <UserContext.Provider value={contextProps}>
        <TimeTracker data={mockImageQuery} />
      </UserContext.Provider>,
    );

    expect(wrapper.find('Card').exists()).toEqual(true);
  });
});
