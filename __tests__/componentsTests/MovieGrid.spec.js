import React from 'react';
import renderer from 'react-test-renderer';
import MovieGrid from '../../src/components/MovieGrid';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('>>>MOVIE GRID', () => {
    
});