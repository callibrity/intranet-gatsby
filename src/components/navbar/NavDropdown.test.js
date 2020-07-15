import React from 'react';
import { shallow } from 'enzyme';
import NavDropdown, { StyledDropdown } from './NavDropdown';
import { Dropdown } from 'react-bootstrap';

const { Toggle, Menu } = Dropdown;

describe('NavDropdown', () => {
    it('Should render nav dropdown with desired label and passed in children as menu items', () => {
        const wrapper = shallow(<NavDropdown label={'testing'}><span>test</span></NavDropdown>);

        expect(wrapper.find(Toggle).text()).toEqual('testing');
        expect(wrapper.find('span').text()).toEqual('test');
        expect(wrapper.find(Menu).children().length).toEqual(1);
    });

    xit('Should activate dropdown menu when clicked', () => {
        const wrapper = shallow(<NavDropdown label={'testing'}><span>test</span></NavDropdown>);
        const toggle = wrapper.find(StyledDropdown);
        toggle.simulate('click');
        debugger
        expect(toggle.props()["aria-expanded"]).toEqual(false);
        debugger
        toggle.simulate('click');
        expect(wrapper.find('a').props()["aria-expanded"]).toEqual(true);
    });
});