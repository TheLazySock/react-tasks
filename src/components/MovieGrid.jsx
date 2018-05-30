import React from 'react';
import { connect } from 'react-redux';

import MovieCard from './MovieCard';
import MovieGridSummary from './MovieGridSummary';

import { setSortBy } from '../redux/actions';

class MovieGrid extends React.Component {
    componentDidMount() {
        this.handleSort(this.props.sortBy);
    }

    componentDidUpdate(prevProps) {
        if (this.props !== prevProps)
            this.handleSort(this.props.sortBy);
    }

    handleSort(sortOption) {
        this.props.setSortBy(sortOption);

        this.sortMoviesBy(sortOption);
    }

    sortMoviesBy(sortOption) {
        const { movies } = this.props;
        if (!sortOption)
            return movies
        if (sortOption === 'release_date') {         
            movies.sort((m1, m2) => new Date(m2.release_date) - new Date(m1.release_date))
            this.forceUpdate();
        }
        if (sortOption === 'vote_average') {
            movies.sort((m1, m2) => m2.vote_average - m1.vote_average)
            this.forceUpdate();
        }
    }

    render() {
        return (
            <div className="movie-grid-container">
                {
                    this.props.path !== "/movie/:id"
                    ? <MovieGridSummary movieCount={this.props.movies.length} sortOption={this.props.sortBy} onSort={this.handleSort.bind(this)}/>
                    : <div className="sort-by-lane">
                        {
                            this.props.searchQuery !== ''
                            ? <label>
                                {
                                    this.props.searchBy === 'genres'
                                    ? `Films by ${this.props.searchQuery} genres` 
                                    : `Films with ${this.props.searchQuery} title` 
                                }
                            </label>
                            : null
                        }
                    </div>
                }
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
        searchBy: state.searchType.searchBy,
        searchQuery: state.searchQuery.searchQuery
    };
}

export default connect(mapStateToProps, { setSortBy })(MovieGrid);

