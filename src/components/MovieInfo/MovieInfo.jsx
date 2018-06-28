// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';

import Loader from '../../containers/Loader';
import style from './style.scss';

type MovieInfoProps = {
    loading: boolean,
    movie: Object
}

const MovieInfo = (props: MovieInfoProps) => {
    const newLocal: Object = props.movie; // линтер ругался на movie = props.movie, исправил как-то так.
    const movie: Object = newLocal;
    const releaseDateYear: number | string = new Date(movie.release_date).getFullYear();

    const genresString: string = Array.isArray(movie.genres) ? movie.genres.join(' & ') : 'No any genres';

    return (
        <div styleName="backdrop">
            <header styleName="backdrop-header">
                <Link styleName="site-name" to={'/search'}>netflixroulette</Link>
                <Link styleName="search-link" to={'/search'}>SEARCH</Link>
            </header>
            <div styleName="movie">
                <Loader loading={props.loading}>
                    <img src={movie.poster_path} styleName="movie-image" />
                    <div styleName="movie-details">
                        <div styleName="movie-title">{movie.title}</div>
                        <div styleName="movie-rating">{movie.vote_average}</div>
                        <div styleName="movie-genre">{genresString}</div>
                        <div styleName="movie-numbers">{releaseDateYear}</div>
                        <div styleName="movie-numbers">{movie.runtime} min</div>
                        <div styleName="scrollable">
                            <div styleName="movie-description">{movie.overview}</div>
                        </div>
                    </div>
                </Loader>
            </div>
        </div>
    );
};

export default CSSModules(MovieInfo, style, { handleNotFoundStyleName: 'ignore' });
