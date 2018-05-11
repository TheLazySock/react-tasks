import React from 'react';

import SearchBox from '../components/SearchBox';
import MovieGrid from '../components/MovieGrid';

class SearchPage extends React.Component {
    render() {
        return (
            <div>
                <SearchBox />
                <MovieGrid />
            </div>
        );
    };
}

export default SearchPage;