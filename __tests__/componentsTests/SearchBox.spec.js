import React from 'react';
import renderer from 'react-test-renderer';
import SearchBox from '../../src/components/SearchBox';
import { shallow, configure, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('>>>SEARCH BOX tests', () => {
    let props = {
        search: 'pulp',
        searchBy: 'title',
        onSearch: jest.fn(),
        onSearchType: jest.fn()
    }
    let container;

    beforeEach(() => {
        container = mount(<SearchBox {...props} />);
    })

    it('search box snapshot', () => {
        expect(shallowToJson(container)).toMatchSnapshot();
    });

    it('state have to match props', () => {
        expect(container.instance().state.text).toBe(props.search);
        expect(container.instance().state.searchBy).toBe(props.searchBy);
    });

    it('trigger pressEnterKey', () => {
        let spy = spyOn(container.instance(), 'pressEnterKey');
        let trigger = container.find('input').simulate('keyDown', { key: 'Enter', keyCode: 13, which: 13, shiftKey: false });
        container.instance().pressEnterKey(trigger);
        expect(spy).toHaveBeenCalled();
    });

    it('trigger handleTextChange', () => {
        let spy = spyOn(container.instance(), 'handleTextChange');
        let trigger = container.find('input').simulate('change', { text: 'meow' });
        container.instance().handleTextChange(trigger);
        expect(spy).toHaveBeenCalled();
    });

    it('trigger handleSearch', () => {
        let spy = spyOn(container.instance(), 'handleSearch');
        let trigger = container.find('.search-button').simulate('click', { text: 'meow' });
        container.instance().handleSearch(trigger);
        expect(spy).toHaveBeenCalled();
    });

    it('trigger handleSearchTypeChanged', () => {
        let spy = spyOn(container.instance(), 'handleSearchTypeChanged');
        let trigger = container.find('.genres-button').simulate('click', { target: { value: 'genres' } });
        container.instance().handleSearchTypeChanged(trigger);
        expect(spy).toHaveBeenCalled();
    });
});