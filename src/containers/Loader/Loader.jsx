// @flow
import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import style from './style.scss';

type LoaderProps = {
    loading: boolean,
    children: Array<any>
}

const Loader = (props: LoaderProps) => (
    (
        <div className={style.loader}>
            {
                props.loading
                    ? <CircularProgress className={style.spinner} size={250} thickness={15} color={'#da395c'}/>
                    : props.children
            }
        </div>
    )
);

export default Loader;
