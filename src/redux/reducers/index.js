import { combineReducers } from 'redux';

import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIE_REQUEST,
    FETCH_MOVIE_SUCCESS
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
                items: action.result,
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

const rootReducer = combineReducers({
    movies,
    movie
})

export default rootReducer;