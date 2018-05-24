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
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <BackdropContainer searchLink={true}>
                    <MovieInfo movie={this.props.movie} />
                </BackdropContainer>
                <MovieGrid movies={[]}/>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    console.log(state.movie);

    console.log(ownProps);

    return {
        movie: state.movie.info,
        loading: state.movie.isFetching,
        movieId: ownProps.match.params.id
    };
}

export default connect(mapStateToProps, { fetchMovie })(MoviePage);