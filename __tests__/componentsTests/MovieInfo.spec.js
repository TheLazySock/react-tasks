import React from 'react';
import renderer from 'react-test-renderer';
import MovieInfo from '../../src/components/MovieInfo';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('>>>MOVIE INFO --- snapshot', () => {
    const movieInfoProps = {
        poster_path: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
        title: "Pulp Fiction",
        release_date: "1994-09-10",
        genres: ["Thriller", "Crime"],
        vote_average: 8.3,
        runtime: 154,
        overview: "A burger-loving hit man, his philosophical partner, " 
                + "a drug-addled gangster's moll and a washed-up boxer converge " 
                + "in this sprawling, comedic crime caper. Their adventures " 
                + "unfurl in three stories that ingeniously trip back and forth in time."
    }
    let container;

    beforeEach(() => {
        container = shallow(<MovieInfo movie={movieInfoProps}/>);
    });

    it('MovieInfo have to rendered succesfully', () => {
        expect(shallowToJson(container)).toMatchSnapshot();
    });

    it('MovieInfo genres should work correctly', () => {
        expect(container.find('.movie-genre').text()).toBe('Thriller & Crime');
    });

    it('Loader should work', () => {
        const container = shallow(<MovieInfo movie={movieInfoProps} loading={true} />);
        expect(container.find('Loader')).toHaveLength(1);
    })
});