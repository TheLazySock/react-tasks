import { movies,
    movie,
    searchType,
    sortType,
    searchQuery } from '../../src/redux/reducers/index'
import { shallow, mount } from 'enzyme';

describe('>>>REDUCERS --- test redux reducers', () => {
    it('fetch movies request', () => {
        let state = {isFetching: true, items: []};
        state = movies(state, {type: 'FETCH_MOVIES_REQUEST'});
        expect(state).toEqual(state, {isFetching: true});
    });

    it('fetch movies success', () => {
        let state = {isFetching: false, items: []};
        state = movies(state, {type: 'FETCH_MOVIES_SUCCESS', data: [{id: 0, title: '0'}]});
        expect(state).toEqual(state, {isFetching: false, items: [{id: 0, title: '0'}]});
    });

    it('fetch movie request', () => {
        let state = {isFetching: true, info: {}};
        state = movie(state, {type: 'FETCH_MOVIE_REQUEST'});
        expect(state).toEqual(state, {isFetching: true});
    });

    it('fetch movie success', () => {
        let state = {isFetching: false, info: {}};
        state = movie(state, {type: 'FETCH_MOVIE_SUCCESS', movie: {id: 0, title: '0'}});
        expect(state).toEqual(state, {isFetching: false, info: {id: 0, title: '0'}});
    });

    it('set search type', () => {
        let state = {searchBy: 'title'};
        state = searchType(state, {type: 'SET_SEARCH_TYPE', searchType: 'genre'});
        expect(state).toEqual(state, {searchType: 'genre'});
    });

    it('set search query', () => {
        let state = {searchQuery: ''};
        state = searchQuery(state, {type: 'SET_SEARCH_QUERY', searchQuery: 'pulp'});
        expect(state).toEqual(state, {searchQuery: 'pulp'});
    });

    it('set sort type', () => {
        let state = {isFetching: false, sortBy: 'release_date'};
        state = sortType(state, {type: 'SET_SORT_TYPE', sortBy: 'vote_average'});
        expect(state).toEqual(state, {sortBy: 'vote_average'});
    });
});