import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './assets/App.scss';
import SearchPage from './containers/SearchPage';
import MoviePage from './containers/MoviePage';
import Footer from './components/Footer';

import store from './redux/store';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <SearchPage />
                <Footer />
            </React.Fragment>
        )
    }
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
