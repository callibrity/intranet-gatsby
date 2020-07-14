import React from 'react';
import { shallow } from 'enzyme';
import PersonTile from './PersonTile';

describe('Person Tile', () => {
    it('Should render correct Link prop', () => {
        const wrapper = shallow(<PersonTile name={'testing'}/>);
        const expectedLink = '/portfolio?name=testing';
        const link = wrapper.find("mockConstructor"); // Link from gatsby translates to mockConstructor here
        
        expect(link.props().to).toEqual(expectedLink);
    });

    it('Should render the correct number of divs', () => {
        const wrapper = shallow(<PersonTile />);
        const divs = wrapper.find('div');

        expect(divs.length).toEqual(2);
        expect(divs.at(0).props().className).toEqual('card tile');
        expect(divs.at(1).props().className).toEqual('card-text tile-overlay');
    });

    it('Should render spans with props passed in', () => {
        const wrapper = shallow(<PersonTile name={'testName'} role={'developer'} />);
        const spans = wrapper.find('span');

        expect(spans.at(0).text()).toEqual('testName');
        expect(spans.at(1).text()).toEqual('developer');
    });
})