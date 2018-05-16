import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './assets/App.scss';
import SearchPage from './containers/SearchPage';
import MoviePage from './containers/MoviePage';
import Footer from './components/Footer';

import store from './redux/store';

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Route path='search' component={SearchPage}/>
                    {/* <Switch>
                        <Route exact path="search" component={SearchPage} />
                        <Route path="movies/:id" component={MoviePage} />
                        <Route path="*" />
                    </Switch> */}
                </Router>
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
