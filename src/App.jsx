import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SearchPage from './containers/SearchPage';
import MoviePage from './containers/MoviePage';
import NotFoundPage from './containers/NotFoundPage';
import Loader from './containers/Loader';

import MovieGrid from './components/MovieGrid';
import Footer from './components/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router history={browserHistory}>
                <MuiThemeProvider>
                    <React.Fragment>
                        <Switch>
                            <Redirect exact from="/" to="/search" />
                            <Route path="/search" component={SearchPage} />
                            <Route path="/movie/:id" component={MoviePage} />
                            <Route path="*" component={NotFoundPage} />
                        </Switch>

                        <div className="grid-loader">
                            <Loader loading={this.props.loading} >
                                <MovieGrid movies={this.props.movies} />
                            </Loader>
                        </div>

                        {this.props.children}

                        <Footer />
                    </React.Fragment>
                </MuiThemeProvider>
            </Router>
        )
    }
};

function mapStateToProps(state) {

    return {
        movies: state.movies.items,
        loading: state.movies.isFetching,
    };
}

export default connect(mapStateToProps)(App);