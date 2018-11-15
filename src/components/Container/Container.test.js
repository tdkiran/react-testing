import React from 'react';
import { Container } from './Container';
import { shallow } from 'enzyme';

describe('Container', () => {

    it('renders without crashing', () => {
        const wrapper = shallow(<Container />);
        expect(wrapper).toBeDefined();
    });

    it('should paint kiran', () => {
        const wrapper = shallow(<Container />);

        expect(wrapper.find('div').at(0).text()).toBe('Kiran');
    });

    it('should contain button of text \'Visitor Digital Sign\'', () => {
        const wrapper = shallow(<Container />);
        expect(wrapper.find('input').props().value).toBe('Visitor Digital Sign');
    });

    it('initial visitor count should be 0', () => {
        const wrapper = shallow(<Container />);
        expect(wrapper.find('.visitorCount').text()).toBe('0');
    });

    it('visitor count should update when button clicked', () => {
        const wrapper = shallow(<Container />);
        expect(wrapper.find('.visitorCount').text()).toBe('0');
        //const instance = wrapper.instance();
        wrapper.find('input').simulate('click');
        expect(wrapper.find('.visitorCount').text()).toBe('1');
        for (let i = 1; i <= 10; i++) {
            wrapper.find('input').simulate('click');
        }
        expect(wrapper.find('.visitorCount').text()).toBe('11');
    });

    // Additional Test: -> Tesgting implementaion not the interface;
    // Testing implementaion is not recommended however,
    // for learning puropses this below snippet is used.

    it('updateCounter should update state', () => {
        const wrapper = shallow(<Container />);
        expect(wrapper.state().count).toBe(0);
        const instance = wrapper.instance();
        instance.updateCounter();
        expect(wrapper.state().count).toBe(1);
    });

})
