import React from 'react';
import ReactDOM from 'react-dom';
import './assets/App.scss';

class App extends React.Component {
    render() {
        return (
            <h1 id="container" className="class">Hello world!</h1>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

// const App = React.createElement(
//     "h1",
//     {
//         id: 'container', className: "class"
//     },
//     "Hello world!"
// )

// ReactDOM.render(App, document.getElementById('app'));