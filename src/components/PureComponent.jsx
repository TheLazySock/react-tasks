import React from 'react';

class PureComp extends React.PureComponent {
    render() {
        return (
            <React.Fragment>
                <h1 id="container" className="class">Hello world with React.PureComponent!</h1>
                <h4 id="time">Now {this.props.time.toLocaleTimeString()}</h4>
            </React.Fragment>
        );
    }
}

export default PureComp;