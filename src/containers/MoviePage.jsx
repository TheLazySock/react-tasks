import React from 'react';
import { connect } from 'react-redux';

import MovieInfo from '../components/MovieInfo';
import MovieGrid from '../components/MovieGrid';
import BackdropContainer from '../components/BackdropContainer';

import { searchMovies } from '../redux/actions';

class MoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {
                "id": 962,
                "title": "The Gold Rush",
                "tagline": "The World's Greatest Laughing Picture!",
                "vote_average": 7.8,
                "vote_count": 411,
                "release_date": "1925-06-25",
                "poster_path": "https://image.tmdb.org/t/p/w500/eQRFo1qwRREYwj47Yoe1PisgOle.jpg",
                "overview": "A lone prospector ventures into Alaska looking for gold. He gets mixed up with some burly characters and falls in love with the beautiful Georgia. He tries to win her heart with his singular charm.",
                "budget": 923000,
                "revenue": 2500000,
                "genres": [
                    "Adventure",
                    "Comedy",
                    "Drama"
                ],
                "runtime": 95
            }
        }

        this.fetchMovie();
    }

    fetchMovie() {
        return fetch(`http://react-cdp-api.herokuapp.com/movies/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(data => this.setState({movie: data}));
    }

    render() {
        return (
            <div>
                <BackdropContainer searchLink={true}>
                    <MovieInfo movie={this.state.movie} />
                </BackdropContainer>
                <MovieGrid movies={[]}/>
            </div>
        );
    }
}

export default connect(null, { searchMovies })(MoviePage);