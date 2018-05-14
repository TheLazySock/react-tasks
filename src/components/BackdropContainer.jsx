import React from 'react';

const style = {
    container: {
        width: "100%",
        backgroundColor: "#211f1f",
        padding: "10px 0 25px"
    },
    content: {
        width: "80%",
        margin: "auto"
    },
    siteName: {
        marginLeft: "10%",
        color: "#c43a58",
        fontSize: "20px"
    }
}

const BackdropContainer = (props) => {
    return (
        <div style={style.container}> 
            <a style={style.siteName}>netflixroulette</a>
            <div style={style.content}>{props.children}</div>
        </div>
    );
}

export default BackdropContainer;