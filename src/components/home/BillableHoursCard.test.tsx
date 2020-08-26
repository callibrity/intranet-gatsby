import React from 'react';
import { shallow } from 'enzyme';
import BillableHoursCard from './BillableHoursCard';
import LineItem from './LineItem';


describe('BillableHoursCard component', () => {
  it('should render Billable Hours', () => {
    const billable = {
      currentHours: 1,
      currentTarget: 2,
      totalTarget: 3,
    };
    const wrapper = shallow(<BillableHoursCard billable={billable} />);
    const lineItems = wrapper.find(LineItem);

    expect(lineItems.at(0).prop('label')).toEqual('Current Hours');
    expect(lineItems.at(0).prop('value')).toEqual(1);
    expect(lineItems.at(1).prop('label')).toEqual('Current Target');
    expect(lineItems.at(1).prop('value')).toEqual(2);
    expect(lineItems.at(2).prop('label')).toEqual('Total Target');
    expect(lineItems.at(2).prop('value')).toEqual(3);
  });
});
