// @flow
import React from 'react';
import { Link } from 'react-router-dom';

import Loader from '../../containers/Loader';
import style from './style.scss';

type MovieInfoProps = {
    loading: boolean,
    movie: Object
}

const MovieInfo = (props: MovieInfoProps) => {
    const newLocal: Object = props.movie; // линтер ругался на movie = props.movie, исправил как-то так.
    const movie: {
        release_date: Date,
        genres: Array<string>,
        poster_path: string,
        title: string,
        overview: string,
        vote_average: number,
        runtime: number
    } = newLocal;
    const releaseDateYear: number | string = new Date(movie.release_date).getFullYear();

    const genresString: string = Array.isArray(movie.genres) ? movie.genres.join(' & ') : 'No any genres';

    return (
        <div className={style.backdrop}>
            <header className={style['backdrop-header']}>
                <Link className={style['site-name']} to={'/search'}>netflixroulette</Link>
                <Link className={style['search-link']} to={'/search'}>SEARCH</Link>
            </header>
            <div className={style.movie}>
                <Loader loading={props.loading}>
                    <img src={movie.poster_path} className={style['movie-image']} />
                    <div className={style['movie-details']}>
                        <div className={style['movie-title']}>{movie.title}</div>
                        <div className={style['movie-rating']}>{movie.vote_average}</div>
                        <div className={style['movie-genre']}>{genresString}</div>
                        <div className={style['movie-numbers']}>{releaseDateYear}</div>
                        <div className={style['movie-numbers']}>{movie.runtime} min</div>
                        <div className={style.scrollable}>
                            <div className={style['movie-description']}>{movie.overview}</div>
                        </div>
                    </div>
                </Loader>
            </div>
        </div>
    );
};

export default MovieInfo;
