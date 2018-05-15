const API_PREFIX = 'http://react-cdp-api.herokuapp.com';

export function searchMovies(query) {
    const params = {
        // query
        search: query
    };

    let url = new URL(`${API_PREFIX}/movies`);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    return fetch(url)
        .then(res => res.json())
        .then(data => console.log(data));
}

export function fetchMovies() {
    return fetch(`${API_PREFIX}/movies`)
        .then(res => res.json())
        .then(data => console.log(data));
}

export function fetchMovie(id) {
    return fetch(`${API_PREFIX}/movies/${id}`, { params })
        // .then(data => camelcaseKeys(data, { deep: true }));
}

export default {
    searchMovies,
    fetchMovies,
    fetchMovie
};