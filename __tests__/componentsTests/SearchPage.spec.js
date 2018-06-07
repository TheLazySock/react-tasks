import React from 'react';
import renderer from 'react-test-renderer';
import DefaultSearchPage, { SearchPage } from '../../src/containers/SearchPage';
import { searchMovies,
    setSearchQuery,
    setSearchBy } from '../../src/redux/actions/index';
import { shallow, configure, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from 'react-router-dom';
import { browserHistory } from 'react-router';
const fetchMock = require('fetch-mock');

configure({ adapter: new Adapter() });

describe('>>>SEARCH PAGE tests', () => {
    const mockStore = configureStore([ thunk ]);
    const movies = [
        {
            "id": 401513,
            "title": "Attraction",
            "tagline": "The Earth is for Humans",
            "vote_average": 5.9,
            "vote_count": 108,
            "release_date": "2017-01-26",
            "poster_path": "https://image.tmdb.org/t/p/w500/2lz2GVDsgMlGYSzPl8BeKqqU7MQ.jpg",
            "overview": "After an alien ship crash lands in a Russian city, many who see the inside and the occupants start to question their own existence while others demand the aliens leave Earth.",
            "budget": 6277106,
            "revenue": 0,
            "genres": [
                "Drama",
                "Romance",
                "Science Fiction",
                "Adventure"
            ],
            "runtime": 130
        },
        {
            "id": 10715,
            "title": "Looney Tunes: Back in Action",
            "tagline": "Real life has never been so animated.",
            "vote_average": 5.7,
            "vote_count": 408,
            "release_date": "2003-11-14",
            "poster_path": "https://image.tmdb.org/t/p/w500/ownVrxw7OYOo8vwk2g4q74Oe8Wa.jpg",
            "overview": "Bugs Bunny and Daffy Duck are up to their feuding ways again. Tired of playing second fiddle to Bugs, Daffy has decided to leave the Studio for good. He is aided by Warner Bros.' humor impaired Vice President of Comedy, Kate Houghton, who releases him from his contract and instructs WB security guard/aspiring stunt man DJ Drake to capture and \"escort\" Daffy off the studio lot.",
            "budget": 80000000,
            "revenue": 68514844,
            "genres": [
                "Animation",
                "Comedy",
                "Family"
            ],
            "runtime": 90
        }
    ];
    const initialState = {
        movies: { items: movies, isFetching: false },
        searchType: { searchBy: 'title' },
        searchQuery: { searchQuery: 'pulp' }
    };
    const props = {
        location: {
            search: '?search='
        },
        setSearchBy: jest.fn(),
        setSearchQuery: jest.fn()
    }
    let store, container;
    
    beforeEach(() => {
        store = mockStore(initialState);
        container = shallow(<DefaultSearchPage store={store} {...props}/>);
    });
    
    it('search page snapshot', () => {
        expect(shallowToJson(container)).toMatchSnapshot();
    });
    
    it('trigger handleSearch', () => {
        const wrapper = shallow(<SearchPage store={store} {...props}/>);
        let push = jest.fn();
        wrapper.setProps({history: { action: 'PUSH', push: push }, location: { search: '?search=pulp', pathname: '/search'}})
        let spy = spyOn(wrapper.instance(), 'handleSearch');
        wrapper.instance().handleSearch('pulp');
        expect(wrapper.instance().props.history).toEqual({ action: 'PUSH', push: push });
        expect(wrapper.instance().props.location).toEqual({ search: '?search=pulp', pathname: '/search'});
        expect(spy).toHaveBeenCalled();
    });
    
    it('trigger handleSearchType', () => {
        const wrapper = shallow(<SearchPage store={store} {...props}/>);
        let handleSearchType = wrapper.instance()['handleSearchType'] = jest.fn((search) => {return search});
        wrapper.instance().handleSearchType('genres');
        expect(handleSearchType).toHaveBeenCalled();
    });
    
    it('trigger componentWillMount & componentWillReceiveProps', () => {
        let mockSearchMovies = jest.fn((text, option) => {return [text, option]});
        const wrapper = mount(<Router history={browserHistory}><SearchPage store={store} search="pulp" searchBy='title' searchMovies={mockSearchMovies} history={history = {push: jest.fn()}}/></Router>);
        expect(wrapper).toBeDefined();
        expect(mockSearchMovies).toHaveBeenCalledWith('pulp', 'title');
    });
    
})