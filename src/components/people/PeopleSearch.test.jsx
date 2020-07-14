import React from 'react';
import { shallow } from 'enzyme';
import PeopleSearch, { StyledFaSearch, Search } from './PeopleSearch';
import 'jest-styled-components';

describe('PeopleSearch', () => {
  it('Should search for the name entered', () => {
    const mockSearch = jest.fn();
    const event = {
      target: {
        value: 'testing',
      },
    };
    const wrapper = shallow(<PeopleSearch setName={mockSearch} />);

    wrapper.find(Search).simulate('change', event);
    expect(mockSearch).toBeCalledWith(event.target.value);
    expect(mockSearch).toHaveBeenCalledTimes(1);
  });

  it('Should set Search value to passed in prop', () => {
    const wrapper = shallow(<PeopleSearch name="Initial Testing" />);
    const search = wrapper.find(Search);

    expect(search.props().value).toEqual('Initial Testing');
  });

  it('Should render search and icon components', () => {
    const wrapper = shallow(<PeopleSearch />);
    const iconComponent = wrapper.find(StyledFaSearch);
    const searchComponent = wrapper.find(Search);

    expect(iconComponent.exists()).toBeTruthy();
    expect(searchComponent.exists()).toBeTruthy();
  });
});
