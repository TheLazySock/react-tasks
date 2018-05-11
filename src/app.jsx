import React from 'react';
import ReactDOM from 'react-dom';
import './assets/App.scss';
import SearchPage from './containers/SearchPage';
import MoviePage from './containers/MoviePage';

const CreateElem = React.createElement(
    "h1",
    {
        id: 'test-component', className: "class", style: {textAlign: 'center'}
    },
    "Hello world with React.createElement() !"
)

class App extends React.Component {
    render() {
        // return (
        //     <React.Fragment>
        //         <ReactComp />
        //         <PureComp time={new Date()}/>
        //         <FuncComp componentName="functional"/>
        //     </React.Fragment>
        // );
        return (
            <React.Fragment>
                <SearchPage/>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));