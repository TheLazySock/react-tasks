// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import style from './style.scss';

type MovieCardProps = {
    release_date: Date,
    genres: Array<string>,
    id: number | string,
    poster_path: ?string,
    title: string
}

const MovieCard = (props: MovieCardProps) => {
    const releaseDateYear = new Date(props.release_date).getFullYear();

    const genresString = Array.isArray(props.genres) ? props.genres.join(' & ') : 'No any genres';

    return (
        <Link styleName="movie-card" to={`/movie/${props.id}`}>
            <img styleName="movie-card-poster" src={props.poster_path} alt="There must be poster"/>
            <div>
                <label styleName="movie-card-title">{props.title}</label>
                <label styleName="movie-card-date">{releaseDateYear}</label>
            </div>
            <label styleName="movie-card-genres">{genresString}</label>
        </Link>
    );
};

export default CSSModules(MovieCard, style);
