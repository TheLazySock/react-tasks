import React from 'react';
import { connect } from 'react-redux';

import MovieInfo from '../components/MovieInfo.jsx';

import { fetchMovie } from '../redux/actions';

export class MoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredMovies: [],
        };
    }

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
