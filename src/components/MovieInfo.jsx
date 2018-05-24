import React from 'react';

const MovieInfo = (props) => {
    console.log(props);
    const movie = props.movie;
    const releaseDateYear = new Date(movie.release_date).getFullYear();

    const genresString = movie.genres ? movie.genres.join(' & ') : '';

    return (
        <div className="movie">
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
        </div>
    );
}

export default MovieInfo;