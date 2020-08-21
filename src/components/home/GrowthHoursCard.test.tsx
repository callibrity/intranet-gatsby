import React from 'react';
import { shallow } from 'enzyme';
import GrowthHoursCard from './GrowthHoursCard';
import LineItem from './LineItem';

describe('GrowthHoursCard component', () => {
  it('should render GrowthHoursCard', () => {
    const growth = {
      hoursUsed: 1,
      hoursRemaining: 2,
      totalGrowth: 3,
    };
    const wrapper = shallow(<GrowthHoursCard growth={growth} />);
    const lineItems = wrapper.find(LineItem);

    expect(lineItems.at(0).prop('label')).toEqual('Hours Used');
    expect(lineItems.at(0).prop('value')).toEqual(1);
    expect(lineItems.at(1).prop('label')).toEqual('Hours Remaining');
    expect(lineItems.at(1).prop('value')).toEqual(2);
    expect(lineItems.at(2).prop('label')).toEqual('Total Growth');
    expect(lineItems.at(2).prop('value')).toEqual(3);
  });
});
