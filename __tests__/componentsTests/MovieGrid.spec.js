import React from 'react';
import renderer from 'react-test-renderer';
import MovieGrid from '../../src/components/MovieGrid';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('>>>MOVIE GRID', () => {
    const mockStore = configureStore();
    const initialState = {
        sortType: { sortBy: 'title' },
        searchType: { searchBy: 'release_date' },
        searchQuery: { searchQuery: 'pulp' }
    };
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
    let store, container;

    beforeEach(() => {
        store = mockStore(initialState);
        container = shallow(<MovieGrid store={store} movies={movies} />);
    })

    it('rendered smart component', () => {
        expect(shallowToJson(container)).toMatchSnapshot();
    });

    it('check props matches with initial state', () => {
        expect(container.prop('sortBy')).toEqual('title');
        expect(container.prop('searchBy')).toEqual('release_date');
        expect(container.prop('searchQuery')).toEqual('pulp');
    });
    
    it('componentDidMount called', () => {
        console.log(container.instance());
    });
});