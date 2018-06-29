import React from 'react';
import renderer from 'react-test-renderer';
import DefaultMovieGrid from '../../src/components/MovieGrid';
import { MovieGrid } from '../../src/components/MovieGrid/MovieGrid.jsx';
import MovieGridSummary from '../../src/components/MovieGridSummary';
import { setSortBy, setSortType } from '../../src/redux/actions/index';
import { shallow, configure, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('>>>MOVIE GRID', () => {
    const mockStore = configureStore([thunk]);
    const initialState = {
        sortType: { sortBy: 'release_date' },
        searchType: { searchBy: 'title' },
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
        container = shallow(<DefaultMovieGrid store={store} movies={movies} />);
    })

    it('rendered smart component', () => {
        expect(shallowToJson(container)).toMatchSnapshot();
    });

    it('rendered with 5 movies count', () => {
        const wrapper = shallow(<MovieGrid store={store} movies={[{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]} setSortBy={jest.fn()} />);
        expect(wrapper.find('.movie-grid').children().length).toBe(5);
    });

    it('rendered with 0 movies count', () => {
        const wrapper = shallow(<MovieGrid store={store} movies={[]} setSortBy={jest.fn()} />);
        expect(wrapper.find('.movie-grid').children().length).toBe(1);
    });

    it('check props matches with initial state', () => {
        expect(container.prop('sortBy')).toEqual('release_date');
        expect(container.prop('searchBy')).toEqual('title');
        expect(container.prop('searchQuery')).toEqual('pulp');
    });

    it('dispatch check', () => {
        let actions;
        store.dispatch(setSortBy('vote_average'));
        actions = store.getActions();
        expect(actions[0].type).toBe('SET_SORT_TYPE');
    });

    it('handleSort simulate', () => {
        let sortOption = store.getState().sortType.sortBy;
        let onSort = (anotherSortOption) => {
            sortOption = anotherSortOption;
        }
        const movieGrid = shallow(<MovieGrid store={store} movies={movies} setSortBy={setSortBy} />);
        const movieGridSummary = mount(<MovieGridSummary sortOption={sortOption} onSort={onSort} />);
        movieGridSummary.find('button#vote-average').simulate('click');
        store = mockStore({
            sortType: { sortBy: sortOption },
            searchType: { searchBy: 'title' },
            searchQuery: { searchQuery: 'pulp' }
        })
        movieGrid.setProps({ store: store });
        expect(movieGrid.instance()).toBeInstanceOf(MovieGrid);
    });

    it('ComponentDidUpdate trigger', () => {
        const movieGrid = shallow(<MovieGrid store={store} movies={movies} sortBy={'release_date'} setSortBy={setSortBy}/>);
        let spy = spyOn(movieGrid.instance(), 'handleSort');
        expect(movieGrid.instance().props.sortBy).toBe('release_date');
        movieGrid.setProps({ sortBy: 'vote_average' });
        expect(movieGrid.instance().props.sortBy).toBe('vote_average');
        movieGrid.instance().handleSort('vote_average');
        expect(spy).toHaveBeenCalled();
    });

    it('trigger handleSort with MovieGridSummary component', () => {
        const movieGrid = shallow(<MovieGrid store={store} movies={movies} setSortBy={setSortBy}/>);
        let spy = spyOn(movieGrid.instance(), 'handleSort');
        const movieGridSummary = movieGrid.find('MovieGridSummary').dive();
        movieGridSummary.find('#vote-average').simulate('click', { target: { value: 'vote_average' } });
        movieGrid.instance().handleSort('vote_average');
        expect(spy).toHaveBeenCalled();
        movieGridSummary.find('#release-date').simulate('click', { target: { value: 'release_date' } });
        movieGrid.instance().handleSort('release_date');
        expect(spy).toHaveBeenCalled();
    });
});

describe('>>>MOVIE GRID SUMMARY', () => {
    it('moviegrid summary rendered correctly', () => {
        const container = shallow(<MovieGridSummary movieCount={10} sortOption={'release_date'} />);
        expect(shallowToJson(container)).toMatchSnapshot();
    });

    it('moviegrid summary rendered renreder with 0 movie count', () => {
        const container = shallow(<MovieGridSummary movieCount={0} sortOption={'release_date'} />);
        expect(container.find('.sort-by-lane').children().length).toBe(0);
    });

    it('change sort option works', () => {
        let sortOption = 'release_date';
        const onSort = (anotherSortOption) => {
            sortOption = anotherSortOption;
        }
        let component = mount(<MovieGridSummary movieCount={10} sortOption={sortOption} onSort={onSort} />)
        expect(component.instance().props.sortOption).toBe('release_date');
        component.find('button#vote-average').simulate('click');
        component.setProps({ sortOption: sortOption });
        expect(component.instance().props.sortOption).toBe('vote_average');

    });
});