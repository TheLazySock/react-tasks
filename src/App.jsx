import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SearchPage from './containers/SearchPage';
import MoviePage from './containers/MoviePage';
import Loader from './containers/Loader';

import MovieGrid from './components/MovieGrid';
import Footer from './components/Footer';

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return (
            // <MuiThemeProvider>
            //     <React.Fragment>
            //         <Switch>
            //             <Redirect exact from="/" to="/search" />
            //             <Route path="/search" component={SearchPage} />
            //             <Route path="/movie/:id" component={MoviePage} />
            //         </Switch>

            //         <div className="grid-loader">
            //             <Loader loading={this.props.loading} >
            //                 <MovieGrid movies={this.props.movies} />
            //             </Loader>
            //         </div>

            //         <Footer />
            //     </React.Fragment>
            // </MuiThemeProvider>
//         )
//     }
// };

const App = ({
    Router, store, loading, movies
}) => (
    <Router>
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
};

function mapStateToProps(state) {

    return {
        movies: state.movies.items,
        loading: state.movies.isFetching,
    };
}

// export default withRouter(connect(mapStateToProps)(App));
export default connect(mapStateToProps)(App);