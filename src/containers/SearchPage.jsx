import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SearchBox from '../components/SearchBox';
import MovieGrid from '../components/MovieGrid';
import BackdropContainer from '../components/BackdropContainer';

import { searchMovies } from '../redux/actions';

// @connect(
//     { searchMovies }
// )

class SearchPage extends React.Component {
    //ВЕСЬ КОНСТРУКТОР ДЛЯ ТЕСТА
    constructor(props) {
        super(props);
        this.state = {movies: []};
    }

    componentWillMount() {
        const { search, searchMovies } = this.props;

        if (search) {
            searchMovies(search);
        }

        //ТОЖЕ ДЛЯ ТЕСТА
        this.searchMovies('');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.search !== this.props.search) {
            this.props.searchMovies(nextProps.search);
        }
    }

    handleSearch(search) {
        const { location } = this.props;

        // searchMovies(search);
    }

    //ФУНКЦИЯ ДЛЯ ТЕСТА, НЕ БОЛЕЕ. ТАКАЯ ЖЕ ЕСТЬ В ЭКШНАХ.
    searchMovies(query) {
        const params = {
            search: query,
            limit: 4
        };
    
        let url = new URL(`http://react-cdp-api.herokuapp.com/movies`);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    
        return fetch(url)
            .then(res => res.json())
            .then(data => this.setState({movies: data.data}));
    }

    render() {
        return (
            <div>
                <BackdropContainer>
                    <SearchBox onSearch={this.handleSearch.bind(this)} search={this.props.search}/>
                </BackdropContainer>
                <MovieGrid movies={this.state.movies}/>
            </div>
        );
    };
}

function mapStateToProps(state, ownProps) {
    return {
        movies: state.movies.items,
        loading: state.movies.isFetching,
        // search: ''
        // search: ownProps.location.query.search
    };
}

export default connect(mapStateToProps, {searchMovies})(SearchPage);