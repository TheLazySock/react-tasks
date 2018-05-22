import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Footer from './components/Footer';

import store from './redux/store';

class App extends React.Component {
    render() {
        return (
            <div>

                {this.props.children}
                {/* <Route path="/search" component={SearchPage} /> */}
                <Footer />
            </div>
        )
    }
};

export default App;