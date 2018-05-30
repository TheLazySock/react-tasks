import React from 'react';
import { Link } from 'react-router-dom';

const style = {
    container: {
        width: "100%",
        backgroundColor: "#211f1f",
        padding: "20px 0 35px",
    },
    content: {
        width: "100%",
        margin: "auto"
    }
}

const BackdropContainer = (props) => {
    return (
        <div style={style.container}>
            <header className="backdrop-header">
                <a className="site-name">netflixroulette</a>
                {
                    props.searchLink
                        ? <Link className="search-link" to={'/search'}>SEARCH</Link>
                        : null
                }
            </header>
            <div style={style.content}>{props.children}</div>
        </div>
    );
}

export default BackdropContainer;