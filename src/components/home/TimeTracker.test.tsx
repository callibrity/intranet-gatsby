import React from 'react';
import { shallow } from 'enzyme';
import TimeTracker, {
  LineItem,
  BillableHours,
  GrowthHours,
} from '@home/TimeTracker';
import Section from '@home/Section';

describe('TimeTracker component', () => {
  it('should render TimeTracker', () => {
    const wrapper = shallow(<TimeTracker />);

    expect(wrapper.find(BillableHours).exists()).toEqual(true);
    expect(wrapper.find(GrowthHours).exists()).toEqual(true);
  });

  it('should render Billable Hours', () => {
    const billable = {
      currentHours: 1,
      currentTarget: 2,
      totalTarget: 3,
    };
    const wrapper = shallow(<BillableHours billable={billable} />);
    const lineItems = wrapper.find(LineItem);

    expect(lineItems.at(0).prop('label')).toEqual('Current Hours');
    expect(lineItems.at(0).prop('value')).toEqual(1);
    expect(lineItems.at(1).prop('label')).toEqual('Current Target');
    expect(lineItems.at(1).prop('value')).toEqual(2);
    expect(lineItems.at(2).prop('label')).toEqual('Total Target');
    expect(lineItems.at(2).prop('value')).toEqual(3);
  });

  it('should render Growth Hours', () => {
    const growth = {
      hoursUsed: 1,
      hoursRemaining: 2,
      totalGrowth: 3,
    };
    const wrapper = shallow(<GrowthHours growth={growth} />);
    const lineItems = wrapper.find(LineItem);

    expect(lineItems.at(0).prop('label')).toEqual('Hours Used');
    expect(lineItems.at(0).prop('value')).toEqual(1);
    expect(lineItems.at(1).prop('label')).toEqual('Hours Remaining');
    expect(lineItems.at(1).prop('value')).toEqual(2);
    expect(lineItems.at(2).prop('label')).toEqual('Total Growth');
    expect(lineItems.at(2).prop('value')).toEqual(3);
  });

  it('should render LineItem', () => {
    const wrapper = shallow(<LineItem label="label" value={1} />);
    const spans = wrapper.find('span');

    expect(spans.at(0).text()).toEqual('label:');
    expect(spans.at(1).text()).toEqual('1');
  });

  it('should not break with invalid data', () => {
    const growthHours = shallow(<GrowthHours />);
    const billableHours = shallow(<BillableHours />);
    const lineItem = shallow(<LineItem />);

    expect(growthHours.exists()).toEqual(true);
    expect(billableHours.exists()).toEqual(true);
    expect(lineItem.exists()).toEqual(true);
  });
});
