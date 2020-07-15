import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown } from 'react-bootstrap';
import QuickLinks from './QuickLinks';
import { quickLinks } from '@globals/constants';

const { Item } = Dropdown;
describe('QuickLinks', () => {
    it('Should render items from the quickLinks constant', () => {
        const wrapper = shallow(<QuickLinks />)
        const items = wrapper.find(Item);

        expect(items.length).toEqual(7);
        expect(items.at(0).props()["href"]).toEqual(quickLinks[0].url);
    });
});