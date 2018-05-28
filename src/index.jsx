import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';


import './assets/App.scss';
import App from './App';
import SearchPage from './containers/SearchPage';
import MoviePage from './containers/MoviePage';

import store from './redux/store';

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <App>
                <Switch>
                    <Redirect exact from="/" to="/search" />
                    <Route path="/search" component={SearchPage} />
                    <Route path="/movie/:id" component={MoviePage} />
                    {/* <Route path="*" component={SearchPage} /> */}
                </Switch>
            </App>
        </Router>
    </Provider>,
    document.getElementById('app')
);
