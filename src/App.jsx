import React from 'react';

import Footer from './components/Footer';

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