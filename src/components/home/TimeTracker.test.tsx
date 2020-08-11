import React from 'react';
import { shallow } from 'enzyme';
import TimeTracker from '@home/TimeTracker';
import Section from '@home/Section';
import BillableHoursCard, { LineItem } from './BillableHoursCard';
import GrowthHoursCard from './GrowthHoursCard';

describe('TimeTracker component', () => {
  it('should render TimeTracker', () => {
    const wrapper = shallow(<TimeTracker />);

    expect(wrapper.find(BillableHoursCard).exists()).toEqual(true);
    expect(wrapper.find(GrowthHoursCard).exists()).toEqual(true);
  });

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

  it('should render Growth Hours', () => {
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

  it('should render LineItem', () => {
    const wrapper = shallow(<LineItem label="label" value={1} />);
    const spans = wrapper.find('span');

    expect(spans.at(0).text()).toEqual('label:');
    expect(spans.at(1).text()).toEqual('1');
  });

  it('should not break with invalid data', () => {
    const growthHours = shallow(<GrowthHoursCard />);
    const billableHours = shallow(<BillableHoursCard />);
    const lineItem = shallow(<LineItem />);

    expect(growthHours.exists()).toEqual(true);
    expect(billableHours.exists()).toEqual(true);
    expect(lineItem.exists()).toEqual(true);
  });
});
