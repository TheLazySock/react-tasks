// @flow
import React from 'react';
import { connect } from 'react-redux';

import MovieInfo from '../../components/MovieInfo';

import { fetchMovie } from '../../redux/actions';

type MoviePageProps = {
    loading: boolean,
    movie: Object,
    movieId: number | string,
    fetchMovie: Function
}

export class MoviePage extends React.Component<MoviePageProps, {filteredMovies: Array<Object>}> {
    constructor(props: MoviePageProps) {
        super(props);
        this.state = {
            filteredMovies: [],
        };
    }

    componentWillMount() {
        const { movieId } = this.props;

        this.props.fetchMovie(movieId);
    }

    componentWillReceiveProps(nextProps: Object) {
        if ((nextProps.movieId !== this.props.movieId)) {
            this.props.fetchMovie(nextProps.movieId);
        }
    }

    render() {
        return (
            <div>
                <MovieInfo movie={this.props.movie} loading={this.props.loading}/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        movie: state.movie.info,
        movies: state.movies.items,
        loading: state.movie.isFetching,
        movieId: ownProps.match.params.id,
    };
}

export default connect(mapStateToProps, { fetchMovie })(MoviePage);
