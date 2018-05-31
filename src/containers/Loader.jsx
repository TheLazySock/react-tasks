import React from 'react';

import CircularProgress from 'material-ui/CircularProgress';

const Loader = props => {
    return (
        <div className="loader">
            {
                props.loading
                ? <CircularProgress className="spinner" size={250} thickness={15} color={'#da395c'}/>
                : props.children
            }
        </div>
    );
}

export default Loader;