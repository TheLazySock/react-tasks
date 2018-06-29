import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../../src/containers/Loader';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('>>>LOADER tests', () => {    
    it('loader have to match snapshot with true loading', () => {
        const container = shallow(<Loader loading={true} children={[{id: 0}, {id: 1}]} />);
        expect(shallowToJson(container)).toMatchSnapshot();
        expect(container.children().length).toBe(1);
    });
    
    it('loader have to match snapshot with false loading', () => {
        const container = shallow(<Loader loading={false} children={[{id: 0}, {id: 1}]} />);
        expect(shallowToJson(container)).toMatchSnapshot();
        expect(container.children().length).toBe(2);
    });
});