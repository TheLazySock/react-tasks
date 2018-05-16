import React from 'react';

import MovieCard from './MovieCard';

const MovieGrid = (props) => {
    const { movies } = props || [];

    console.log(movies);
    
    return (
        <div className="movie-grid-container">
            <div className="sort-by-lane">
                {
                    movies.length !== 0
                    ? 
                    <React.Fragment>
                        <label>{movies.length} movies found</label>
                        <div>
                            Sort by
                            <button>release date</button>
                            <button>rating</button>
                        </div>
                    </React.Fragment>
                    : null
                }
            </div>
            <div className="movie-grid">
                {
                    movies.length !== 0
                    ?  movies.map(movie => <MovieCard key={movie.id} {...movie}/>) 
                    : <label>No films found</label>
                }
            </div>
        </div>
    );
}

export default MovieGrid;

