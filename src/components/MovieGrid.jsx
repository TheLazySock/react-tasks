import React from 'react';
import { connect } from 'react-redux';

import MovieCard from './MovieCard';
import MovieGridSummary from './MovieGridSummary';

import { setSortBy } from '../redux/actions';

class MovieGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.handleSort(this.props.sortBy)
    }

    handleSort(sortOption) {
        this.props.setSortBy(sortOption)

        this.sortFilmsBy(sortOption);
    }

    sortFilmsBy(sortOption) {
        const { movies } = this.props;
        console.log(sortOption);
        if (!sortOption)
            return movies
        if (sortOption === 'release_date')
            // return movies.sort((m1, m2) => new Date(m2.release_date).getFullYear() - new Date(m1.release_date).getFullYear())
            return movies.sort((m1, m2) => new Date(m2.release_date) - new Date(m1.release_date))
        if (sortOption === 'vote_average')
            return movies.sort((m1, m2) => m2.vote_average - m1.vote_average)
    }

    render() {
        return (
            <div className="movie-grid-container">
                <MovieGridSummary movieCount={this.props.movies.length} sortOption={this.props.sortBy} onSort={this.handleSort.bind(this)}/>
                <div className="movie-grid">
                    {
                        this.props.movies.length !== 0
                        ?  this.props.movies.map(movie => <MovieCard key={movie.id} {...movie}/>) 
                        : <label>No films found</label>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        sortBy: state.sortType.sortBy,
    };
}

export default connect(mapStateToProps, { setSortBy })(MovieGrid);

