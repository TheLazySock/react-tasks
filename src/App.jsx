import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SearchPage from './containers/SearchPage';
import MoviePage from './containers/MoviePage';
import MovieGrid from './components/MovieGrid';
import style from './assets/basic.scss';

import Loader from './containers/Loader';
import Footer from './components/Footer';

const App = ({
    Router, store, location, context, loading, movies,
}) => (
    <Router location={location} context={context}>
        <Provider store={store}>
            <MuiThemeProvider>
                <div className={ style['app-container'] }>
                    <Switch>
                        <Redirect exact from="/" to="/search" />
                        <Route path="/search" component={SearchPage} />
                        <Route path="/movie/:id" component={MoviePage} />
                    </Switch>

                    <div className={style['grid-loader']}>
                        <Loader loading={loading} >
                            <MovieGrid movies={movies} />
                        </Loader>
                    </div>

                    <Footer />
                </div>
            </MuiThemeProvider>
        </Provider>
    </Router>
);

App.propTypes = {
    Router: PropTypes.func.isRequired,
    store: PropTypes.shape({
        dispatch: PropTypes.func.isRequired,
        getState: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.string,
    context: PropTypes.shape({
        url: PropTypes.string,
    }),
};

App.defaultProps = {
    location: null,
    context: null,
};

function mapStateToProps(state) {
    return {
        movies: state.movies.items,
        loading: state.movies.isFetching,
    };
}

export default connect(mapStateToProps)(App);
