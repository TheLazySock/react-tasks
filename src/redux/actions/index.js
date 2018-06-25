import api from '../api';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const FETCH_MOVIE_REQUEST = 'FETCH_MOVIE_REQUEST';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';

export const SET_SEARCH_TYPE = 'SET_SEARCH_TYPE';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const SET_SORT_TYPE = 'SET_SORT_TYPE';

export const fetchMoviesRequest = query => ({
    type: FETCH_MOVIES_REQUEST,
    query,
});

export const fetchMoviesSuccess = data => ({
    ...data,
    type: FETCH_MOVIES_SUCCESS,
});

export const fetchMovieRequest = id => ({
    type: FETCH_MOVIE_REQUEST,
    id,
});

export const fetchMovieSuccess = data => ({
    type: FETCH_MOVIE_SUCCESS,
    movie: data,
});

export const setSearchType = searchType => ({
    type: SET_SEARCH_TYPE,
    searchType,
});

export const setSortType = sortType => ({
    type: SET_SORT_TYPE,
    sortType,
});

export const searchMovies = (query, searchBy) => (dispatch) => {
    dispatch(fetchMoviesRequest(query));

    return api.searchMovies(query, searchBy) // eslint-disable-line
        .then(data => dispatch(fetchMoviesSuccess(data)));
};

export const fetchMovie = id => (dispatch) => {
    dispatch(fetchMovieRequest(id));

    return api.fetchMovie(id) // eslint-disable-line
        .then(data => dispatch(fetchMovieSuccess(data)));
};

export const setSearchQuery = searchQuery => dispatch => dispatch({
    type: SET_SEARCH_QUERY,
    searchQuery,
});

export const setSearchBy = searchType => dispatch => dispatch(setSearchType(searchType));

export const setSortBy = sortType => dispatch => dispatch(setSortType(sortType));
