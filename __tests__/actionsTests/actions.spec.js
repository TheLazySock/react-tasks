import { fetchMoviesRequest,
    fetchMoviesSuccess,
    fetchMovieRequest,
    fetchMovieSuccess,
    setSearchType,
    setSortType,
    searchMovies,
    fetchMovie,
    setSearchQuery,
    setSearchBy,
    setSortBy } from '../../src/redux/actions/index'
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { store } from '../../src/redux/store';
const fetchMock = require('fetch-mock');
const mockStore = configureMockStore([ thunk ]);

describe('>>>ACTIONS --- Test redux actions', () => {
    it('fetchMoviesRequest test', () => {
        const fetchRequest = fetchMoviesRequest('pulp');
        expect(fetchRequest).toEqual({ type: 'FETCH_MOVIES_REQUEST', query: 'pulp'});
    });
    
    // it('fetchMoviesSuccess test', () => {
    //     const fetchSuccess = fetchMoviesSuccess('pulp');
    //     expect(fetchSuccess).toEqual({ type: 'FETCH_MOVIES_SUCCESS', data: 'pulp'});
    // });
    
    it('fetchMovieRequest test', () => {
        const fetchRequest = fetchMovieRequest(680);
        expect(fetchRequest).toEqual({ type: 'FETCH_MOVIE_REQUEST', id: 680});
    });

    it('setSearchType test', () => {
        const setRequest = setSearchType('genre');
        expect(setRequest).toEqual({ type: 'SET_SEARCH_TYPE', searchType: 'genre' });
    });

    it('setSortType test', () => {
        const setRequest = setSortType('rating');
        expect(setRequest).toEqual({ type: 'SET_SORT_TYPE', sortType: 'rating' });
    });

    it('setSearchQuery test', () => {
        const store = mockStore({ searchQuery: '' });

        store.dispatch(setSearchQuery('pulp'))
        expect(store.getActions()).toEqual([{ type: 'SET_SEARCH_QUERY', searchQuery: 'pulp' }]);
    });

    it('setSearchBy test', () => {
        const store = mockStore({ searchType: '' });

        store.dispatch(setSearchBy('title'))
        expect(store.getActions()).toEqual([{ type: 'SET_SEARCH_TYPE', searchType: 'title' }]);
    });

    it('setSortBy test', () => {
        const store = mockStore({ sortType: '' });

        store.dispatch(setSortBy('rating'))
        expect(store.getActions()).toEqual([{ type: 'SET_SORT_TYPE', sortType: 'rating' }]);
    });
});

describe('>>>ACTIONS --- async actions', () => {
    beforeEach(() => {
        fetchMock.reset();
    });
    
    afterEach(() => {
        fetchMock.restore();
    })

    it('searchMovies test', async () => {
        fetchMock.get('*', []);

        const expectedActions = [
            {
                type: 'FETCH_MOVIES_REQUEST',
                query: 'pulp'
            },
            {
                type: 'FETCH_MOVIES_SUCCESS'
            }
        ];
        const store = mockStore({ data: {} });
        return await store.dispatch(searchMovies('pulp', 'title'))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });

    it('fetchMovie test', async () => {
        fetchMock.get('*', {id: 680});

        const expectedActions = [
            {
                type: 'FETCH_MOVIE_REQUEST',
                id: 680
            },
            {
                type: 'FETCH_MOVIE_SUCCESS',
                movie: {
                    id: 680
                }
            }
        ];
        const store = mockStore({ data: {} });
        return await store.dispatch(fetchMovie(680))
            .then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
    });
});