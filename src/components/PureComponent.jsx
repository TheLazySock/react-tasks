import React from 'react';

//It's stateless component, some work with state was done at Component.jsx, but PureComponent is just for render some text (also with static props, without updating).
class PureComp extends React.PureComponent {
    render() {
        return (
            <div id="test-component">
                <h1 id="container" className="class">Hello world with React.PureComponent!</h1>
                <h4 id="time">You came to this page at {this.props.time.toLocaleTimeString()}</h4>
            </div>
        );
    }
}

export default PureComp;