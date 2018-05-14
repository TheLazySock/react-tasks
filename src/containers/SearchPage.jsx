import React from 'react';

import SearchBox from '../components/SearchBox';
import MovieGrid from '../components/MovieGrid';
import BackdropContainer from '../components/BackdropContainer';

class SearchPage extends React.Component {
    

    componentWillMount() {
        // fetch('http://react-cdp-api.herokuapp.com/movies')
        // .then(response => response.json())
        // .then(data => console.log);
    }

    render() {
        return (
            <div>
                <BackdropContainer>
                    <SearchBox />
                </BackdropContainer>
                <MovieGrid movies={this.props.movies}/>
            </div>
        );
    };
}

export default SearchPage;