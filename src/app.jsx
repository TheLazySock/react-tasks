import React from 'react';
import ReactDOM from 'react-dom';
import './assets/App.scss';
import ReactComp from './components/Component';
import PureComp from './components/PureComponent';
import FuncComp from './components/FunctionalComponent'

const CreateElem = React.createElement(
    "h1",
    {
        id: 'test-component', className: "class", style: {textAlign: 'center'}
    },
    "Hello world with React.createElement() !"
)

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ReactComp />
                <PureComp time={new Date()}/>
                <FuncComp componentName="functional"/>
            </React.Fragment>
        );
    }
}

ReactDOM.render(CreateElem, document.getElementById('create-elem'));
ReactDOM.render(<App />, document.getElementById('app'));