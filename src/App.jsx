import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/* eslint-disable */
import SearchPage from './containers/SearchPage.jsx';
import MoviePage from './containers/MoviePage.jsx';
import MovieGrid from './components/MovieGrid.jsx';
/* eslint-enable */
import Loader from './containers/Loader.jsx';
import Footer from './components/Footer.jsx';

const App = ({
    Router, store, location, context, loading, movies,
}) => (
    <Router location={location} context={context}>
        <Provider store={store}>
            <MuiThemeProvider>
                <React.Fragment>
                    <Switch>
                        <Redirect exact from="/" to="/search" />
                        <Route path="/search" component={SearchPage} />
                        <Route path="/movie/:id" component={MoviePage} />
                    </Switch>

                    <div className="grid-loader">
                        <Loader loading={loading} >
                            <MovieGrid movies={movies} />
                        </Loader>
                    </div>

                    <Footer />
                </React.Fragment>
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

// export default withRouter(connect(mapStateToProps)(App));
export default connect(mapStateToProps)(App);
