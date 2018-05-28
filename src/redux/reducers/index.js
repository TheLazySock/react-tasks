import { combineReducers } from 'redux';

import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIE_REQUEST,
    FETCH_MOVIE_SUCCESS,
    SEARCH_TYPE_TITLE,
    SEARCH_TYPE_GENRE,
    SET_SEARCH_TYPE
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
            console.log('setserchtype')
            return {
                ...state,
                searchBy: action.searchType
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    movies,
    movie,
    searchType
})

export default rootReducer;