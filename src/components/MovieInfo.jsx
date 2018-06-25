import React from 'react';
import { Link } from 'react-router-dom';

import Loader from '../containers/Loader.jsx';

const MovieInfo = (props) => {
    const newLocal = props.movie; // линтер ругался на movie = props.movie, исправил как-то так.
    const movie = newLocal;
    const releaseDateYear = new Date(movie.release_date).getFullYear();

    const genresString = Array.isArray(movie.genres) ? movie.genres.join(' & ') : 'No any genres';

    return (
        <div className="backdrop">
            <header className="backdrop-header">
                <Link className="site-name" to={'/search'}>netflixroulette</Link>
                <Link className="search-link" to={'/search'}>SEARCH</Link>
            </header>
            <div className="movie">
                <Loader loading={props.loading}>
                    <img src={movie.poster_path} className="movie-image" />
                    <div className="movie-details">
                        <div className="movie-title">{movie.title}</div>
                        <div className="movie-rating">{movie.vote_average}</div>
                        <div className="movie-genre">{genresString}</div>
                        <div className="movie-numbers">{releaseDateYear}</div>
                        <div className="movie-numbers">{movie.runtime} min</div>
                        <div className="scrollable">
                            <div className="movie-description">{movie.overview}</div>
                        </div>
                    </div>
                </Loader>
            </div>
        </div>
    );
};

export default MovieInfo;
