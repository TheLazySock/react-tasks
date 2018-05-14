export function fetchMovies() {
    return fetch(`http://react-cdp-api.herokuapp.com/movies`, { params })
        // .then(data => camelcaseKeys(data, { deep: true }));
}

export function fetchMovie(id) {
    return fetch(`http://react-cdp-api.herokuapp.com/movies/${id}`, { params })
        // .then(data => camelcaseKeys(data, { deep: true }));
}

export default {
    searchMovies,
    fetchMovie
};