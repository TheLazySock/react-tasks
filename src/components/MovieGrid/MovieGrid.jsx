// @flow
import React from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';

import MovieCard from '../MovieCard';
import MovieGridSummary from '../MovieGridSummary';
import style from './style.scss';

import { setSortBy } from '../../redux/actions';

type MovieGridProps = {
    movies: Array<Object>,
    sortBy: string,
    searchBy: string,
    searchQuery: string,
    setSortBy: Function
}

export class MovieGrid extends React.Component<MovieGridProps> {
    componentDidMount() {
        this.handleSort(this.props.sortBy);
    }

    componentDidUpdate(prevProps: Object) {
        if (this.props.sortBy !== prevProps.sortBy) {
            this.handleSort(this.props.sortBy);
        }
    }

    handleSort(sortOption: string) {
        this.props.setSortBy(sortOption);

        this.sortMoviesBy(sortOption);
    }

    sortMoviesBy(sortOption: string) {
        const { movies } = this.props;
        if (!sortOption) {
            return movies;
        }
        if (sortOption === 'release_date') {
            movies.sort((m1, m2) => new Date(m2.release_date) - new Date(m1.release_date));
        }
        if (sortOption === 'vote_average') {
            movies.sort((m1, m2) => m2.vote_average - m1.vote_average);
        }
        return this.forceUpdate();
    }

    render() {
        return (
            <div styleName="movie-grid-container">
                <MovieGridSummary
                    movieCount={this.props.movies.length}
                    sortOption={this.props.sortBy}
                    onSort={this.handleSort.bind(this)}
                />
                <div styleName="movie-grid">
                    {
                        this.props.movies.length !== 0
                            ? this.props.movies.map(movie => <MovieCard key={movie.id} {...movie} />)
                            : <label>No films found</label>
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        sortBy: state.sortType.sortBy,
        searchBy: state.searchType.searchBy,
        searchQuery: state.searchQuery.searchQuery // eslint-disable-line
    };
}

export default connect(mapStateToProps, { setSortBy })(CSSModules(MovieGrid, style));
