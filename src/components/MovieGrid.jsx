import React from 'react';

import MovieCard from './MovieCard';

const MovieGrid = (props) => {
    const { movies } = props || [];

    console.log(movies);
    
    return (
        <div>
            {
                movies.length !== 0
                ? movies.map(movie => <MovieCard key={movie.id} {...movie}/>) 
                : <label>No films found</label>
            }
        </div>
    );
}

export default MovieGrid;

