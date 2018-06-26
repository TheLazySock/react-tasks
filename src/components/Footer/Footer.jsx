import React from 'react';
import CSSModules from 'react-css-modules';

import style from './style.scss';

const Footer = () => (
    <footer styleName="footer">
        <label>netflixroulette</label>
    </footer>
);

export default CSSModules(Footer, style);
