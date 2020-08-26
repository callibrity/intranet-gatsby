import React, { useContext } from 'react';
import { mount } from 'enzyme';
import TimeTracker from '@home/TimeTracker';
import { UserContext } from '@globals/contexts';
import { mockImageQuery } from '@globals/testConstants';

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
        <TimeTracker data={mockImageQuery} />
      </UserContext.Provider>,
    );

    expect(wrapper.find('Card').exists()).toEqual(true);
    wrapper.unmount();
  });
  // this test passes but then the async call comes back 404 and breaks the output
  // TODO need to handle mocking api token to get successful call
  // it('renders does not render cards for Account Manager view on initial load', () => {
  //   const wrapper = mount(
  //     <UserContext.Provider value={contextPropsAccountManager}>
  //       <TimeTracker />
  //     </UserContext.Provider>,
  //   );
  //   expect(wrapper.find('Card').exists()).toEqual(false);
  //   wrapper.unmount();
  // });
});
