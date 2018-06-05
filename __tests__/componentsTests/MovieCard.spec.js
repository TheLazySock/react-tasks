import React from 'react';
import renderer from 'react-test-renderer';
import MovieCard from '../../src/components/MovieCard';
import { shallow, configure } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('>>>MOVIE CARD --- snapshot', () => {
    const movieInfo = {
        id: 680,
        poster_path: "https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg",
        title: "Pulp Fiction",
        release_date: "1994-09-10",
        genres: ["Thriller", "Crime"]
    }

    it('MovieCard have to rendered succesfully', () => {
        const movieCard = shallow(<MovieCard 
            id={movieInfo.id} 
            poster_path={movieInfo.poster_path}
            title={movieInfo.title}
            release_date={movieInfo.release_date}
            genres={movieInfo.genres}
        />);
        expect(shallowToJson(movieCard)).toMatchSnapshot();
    });

    it('MovieCard link should work correctly', () => {
        const movieCard = shallow(<MovieCard id={movieInfo.id} />);
        expect(movieCard.prop('to')).toBe('/movie/680');
    })
});