const API_PREFIX = 'http://react-cdp-api.herokuapp.com';

export function searchMovies(query) {
    // query = new URLSearchParams(query);
    // console.log('query');
    // console.log(query);

    const params = {
        // search: query.get('search') ? query.get('search') : query,
        // searchBy: query.get('searchBy') ? query.get('searchBy') : 'title'
        search: query,
        searchBy: 'title'
    }

    let url = new URL(`${API_PREFIX}/movies`);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    return fetch(url)
        .then(res => res.json())
}

export function fetchMovie(id) {
    console.log(id);
    return fetch(`${API_PREFIX}/movies/${id}`)
        .then(res => res.json())
}

export default {
    searchMovies,
    fetchMovie
};