import React from 'react';
import { shallow } from 'enzyme';
import LineItem from './LineItem';
import { mockLineItemProps } from '@globals/testConstants';

describe('LineItem component', () => {
  it('should render spans with the label and value', () => {
    const wrapper = shallow(<LineItem {...mockLineItemProps} />);

    const lineItems = wrapper.find('span');

    expect(lineItems.at(0).text()).toEqual(`${mockLineItemProps.label}:`);
    expect(lineItems.at(1).text()).toEqual(mockLineItemProps.value);
  });
});
