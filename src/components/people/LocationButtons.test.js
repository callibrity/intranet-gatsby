import React from 'react';
import { shallow, mount } from 'enzyme';
import LocationButtons, { ButtonFilter } from '@components/people/LocationButtons';
import { peopleLocationButtonList } from "@globals/constants";
import { blue, darkerBlue } from '@globals/theme';
import { ThemeProvider } from "styled-components"
import theme from '@globals/theme';
import 'jest-styled-components';

describe('LocationButtons', () => {
    it('Should execute set location', () => {
        const mockSetLocation = jest.fn();
        const wrapper = shallow(<LocationButtons setLocation={mockSetLocation} />);

        expect(mockSetLocation).toHaveBeenCalledTimes(0);
        wrapper.find(ButtonFilter).at(0).simulate('click');
        expect(mockSetLocation).toHaveBeenCalledTimes(1);
        expect(mockSetLocation).toHaveBeenCalledWith(peopleLocationButtonList[0].value)

        mockSetLocation.mockReset();
        expect(mockSetLocation).toHaveBeenCalledTimes(0);
        wrapper.find(ButtonFilter).at(1).simulate('click');
        expect(mockSetLocation).toHaveBeenCalledTimes(1);
        expect(mockSetLocation).toHaveBeenCalledWith(peopleLocationButtonList[1].value)
    });

    it('Should set Cincinnati blue', () => {
        const wrapper = mount(<LocationButtons location={'Cincinnati'} />);
        const buttons = wrapper.find(ButtonFilter);

        expect(buttons.at(0)).toHaveStyleRule('background-color', blue);
        expect(buttons.at(1)).toHaveStyleRule('background-color', darkerBlue);
    });

    it('Should set Columbus blue', () => {
        const wrapper = mount(<LocationButtons location={'Columbus'} />);
        const buttons = wrapper.find(ButtonFilter);

        expect(buttons.at(0)).toHaveStyleRule('background-color', darkerBlue);
        expect(buttons.at(1)).toHaveStyleRule('background-color', blue);
    });

    it('Should set Cincinnati Label correctly', () => {
        const wrapper = shallow(<LocationButtons />);
        const cincinnatiButton = wrapper.find(ButtonFilter).at(0);

        expect(cincinnatiButton.text()).toEqual("CINCINNATI");
    })
})