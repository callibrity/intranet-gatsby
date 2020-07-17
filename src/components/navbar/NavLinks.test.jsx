import React from 'react';
import { shallow, mount } from 'enzyme';
import { Dropdown } from 'react-bootstrap';
import { quickLinks } from '@globals/constants';
import { UserContext } from '@globals/contexts';
import NavLinks, { QuickLinks, UserDropdown, StyledLink } from './NavLinks';
import Logout from './Logout';

const { Toggle, Menu, Item } = Dropdown;

describe('QuickLinks', () => {
  it('Should render items from the quickLinks constant', () => {
    const wrapper = shallow(<QuickLinks />);
    const items = wrapper.find(Item);

    expect(items.length).toEqual(7);
    expect(wrapper.find(Toggle).text()).toEqual('Quick Links');
    expect(items.at(0).props().href).toEqual(quickLinks[0].url);
    expect(wrapper.find(Menu).exists()).toBeTruthy();
  });
});

describe('UserDropdown', () => {
  it('Should render items from the quickLinks constant', () => {
    const wrapper = shallow(<UserDropdown username="test" />);
    const items = wrapper.find(Item);

    expect(items.length).toEqual(1);
    expect(wrapper.find(Toggle).text()).toEqual('test');
    expect(items.at(0).find(Logout).exists()).toBeTruthy();
    expect(wrapper.find(Menu).exists()).toBeTruthy();
  });
});

describe('NavLinks', () => {
  it('Should render UserDropdown and QuickLinks', () => {
    const contextProps = {
      username: 'testUsername',
    };
    const wrapper = mount(<UserContext.Provider value={contextProps}><NavLinks /></UserContext.Provider>);
    const styledLinks = wrapper.find(StyledLink);

    expect(styledLinks.length).toEqual(2);
    expect(styledLinks.at(0).prop('to')).toEqual('/wiki');
    expect(styledLinks.at(1).prop('to')).toEqual('/people');
    expect(styledLinks.at(0).text()).toEqual('Wiki');
    expect(styledLinks.at(1).text()).toEqual('People');
    expect(wrapper.find(QuickLinks).exists()).toBeTruthy();
    expect(wrapper.find(UserDropdown).prop('username')).toEqual(contextProps.username);
  });

  it('Should render null if username not provided', () => {
    const contextProps = {
      username: null,
    };
    const wrapper = mount(<UserContext.Provider value={contextProps}><NavLinks /></UserContext.Provider>);

    expect(wrapper.children().length).toEqual(0);
  });
});
