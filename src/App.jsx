import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import SearchPage from './containers/SearchPage';
import MoviePage from './containers/MoviePage';
import Footer from './components/Footer';

import store from './redux/store';

const App = () => (
    <React.Fragment>
        <Switch>
            {/* <Redirect from="/" to="search"/> */}
            <Route path="/" component={SearchPage} />
            <Route path="search/:searchQuery" component={SearchPage}/>
            <Route path="movie/:id" component={MoviePage}/>
        </Switch>
        {/* <Route path="/search" component={SearchPage} /> */}
        <Footer />
    </React.Fragment>
);

export default App;