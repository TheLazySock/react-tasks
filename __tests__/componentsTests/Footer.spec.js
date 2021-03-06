import React from 'react';
import renderer from 'react-test-renderer';
import Footer from '../../src/components/Footer';
import { configure } from 'enzyme';


describe('>>>FOOTER --- snapshot', () => {
    const style = {
        footer: {}
    }
    
    it('Footer have to rendered succesfully', () => {
        const renderedFooter = renderer.create(<Footer style={style}/>).toJSON();
        expect(renderedFooter).toMatchSnapshot();
    });
});