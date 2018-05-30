import { combineReducers } from 'redux';

import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIE_REQUEST,
    FETCH_MOVIE_SUCCESS,
    SET_SEARCH_TYPE,
    SET_SORT_TYPE,
    SET_SEARCH_QUERY
} from '../actions';

const movies = (state = { isFetching: false, items: [] }, action) => {
    switch(action.type) {
        case FETCH_MOVIES_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                items: action.data,
                isFetching: false
            };
        default: 
            return state
    }
};

const movie = (state = { isFetching: false, info: {} }, action) => {
    switch(action.type) {
        case FETCH_MOVIE_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_MOVIE_SUCCESS:
            return {
                ...state,
                info: action.movie,
                isFetching: false
            }
        default: 
            return state
    }
};

const searchType = (state = { searchBy: 'title'}, action) => {
    switch(action.type) {
        case SET_SEARCH_TYPE: 
            return {
                ...state,
                searchBy: action.searchType
            }
        default:
            return state
    }
}

const searchQuery = (state = { searchQuery: ''}, action) => {
    switch(action.type) {
        case SET_SEARCH_QUERY:
            return {
                ...state,
                searchQuery: action.searchQuery
            }
        default:
            return state
    }
}

const sortType = (state = { sortBy: 'release_date'}, action) => {
    switch(action.type) {
        case SET_SORT_TYPE: 
            return {
                ...state,
                sortBy: action.sortType
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    movies,
    movie,
    searchType,
    sortType,
    searchQuery
})

export default rootReducer;