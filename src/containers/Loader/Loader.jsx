import React from 'react';
import CSSModules from 'react-css-modules';
import CircularProgress from 'material-ui/CircularProgress';
import style from './style.scss';

const Loader = props => (
    (
        <div styleName="loader">
            {
                props.loading
                    ? <CircularProgress styleName="spinner" size={250} thickness={15} color={'#da395c'}/>
                    : props.children
            }
        </div>
    )
);

export default CSSModules(Loader, style);
