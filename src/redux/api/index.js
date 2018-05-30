const API_PREFIX = 'http://react-cdp-api.herokuapp.com';

export function searchMovies(query, searchBy) {
    const params = {
        search: query,
        searchBy: searchBy ? searchBy : 'title',
        limit: 50
    }

    let url = new URL(`${API_PREFIX}/movies`);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    return fetch(url)
        .then(res => res.json())
}

export function fetchMovie(id) {
    return fetch(`${API_PREFIX}/movies/${id}`)
        .then(res => res.json())
}

export default {
    searchMovies,
    fetchMovie
};