import React from 'react';

//Component with some experiments with state and lifecycle hooks. 
//There are counter and mount timer.
//Yes, I understand that I can split this component, but timer was written 
//just before the commit. Forgive me for this laziness.
class ReactComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0, seconds: 0};
    }

    componentDidMount() {
        this.timer = setInterval(this.tick.bind(this), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            seconds: this.state.seconds + 1
        })
    }

    handleDecrement() {
        this.setState({
            value: this.state.value - 1
        });
    }

    handleIncrement() {
        this.setState({
            value: this.state.value + 1
        });
    }

    render() {
        return (
            <div id="test-component" className="container">
                <h1 id="counter"style={{alignSelf: 'center'}}>Counter: {this.state.value}!</h1>
                <div className="counter-buttons">
                    <button onClick={this.handleDecrement.bind(this)}>-</button>
                    <button onClick={this.handleIncrement.bind(this)}>+</button>
                </div>

                <div className="container">
                    <h1 style={{alignSelf: 'center'}}>Timer!</h1>
                    <h2 style={{alignSelf: 'center'}}>Component mounted {this.state.seconds} seconds</h2>
                </div>
            </div>
        );
    }
}

export default ReactComp;