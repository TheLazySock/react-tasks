import React from 'react';

const MovieCard = (props) => {
    const releaseDateYear = new Date(props.release_date).getFullYear();

    const genresString = props.genres.join(' & ');

    return (
        <a className="movie-card" href='#'>
            <img className="movie-card-poster" src={props.poster_path} alt="There must be poster"/>
            <div>
                <label className="movie-card-title">{props.title}</label>
                <label className="movie-card-date">{releaseDateYear}</label>
            </div>
            <label className="movie-card-genres">{genresString}</label>
        </a>
    )
}

export default MovieCard;