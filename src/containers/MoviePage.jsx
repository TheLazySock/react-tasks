import React from 'react';
import { connect } from 'react-redux';

import MovieInfo from '../components/MovieInfo';
import MovieGrid from '../components/MovieGrid';
import BackdropContainer from '../components/BackdropContainer';

import { fetchMovie } from '../redux/actions';

class MoviePage extends React.Component {
    componentWillMount() {
        const { movieId } = this.props;

        this.props.fetchMovie(movieId);
    }

    componentWillReceiveProps(nextProps) {
        if ((nextProps.movieId !== this.props.movieId)) {
            this.props.fetchMovie(nextProps.movieId);
        }
    }

    render() {
        return (
            <div>
                <BackdropContainer searchLink={true}>
                    <MovieInfo movie={this.props.movie} />
                </BackdropContainer>
                <MovieGrid movies={this.props.movies} path={this.props.match.path} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        movie: state.movie.info,
        movies: state.movies.items,
        loading: state.movie.isFetching,
        movieId: ownProps.match.params.id
    };
}

export default connect(mapStateToProps, { fetchMovie })(MoviePage);