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
        // this.searchMovies('');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.search !== this.props.search) {
            this.props.searchMovies(nextProps.search);
        }
    }

    handleSearch(search) {
        const { location } = this.props;
        console.log(location);
        // searchMovies(search);
    }

    //ФУНКЦИЯ ДЛЯ ТЕСТА, НЕ БОЛЕЕ. ТАКАЯ ЖЕ ЕСТЬ В ЭКШНАХ.
    // searchMovies(query) {
    //     query = new URLSearchParams(this.props.location.search);
    //     console.log(query);

    //     const params = {
    //         search: query.get('search'),
    //         searchBy: query.get('searchBy') ? query.get('searchBy') : 'title'
    //     }
    
    //     let url = new URL(`http://react-cdp-api.herokuapp.com/movies`);
    //     Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    
    //     return fetch(url)
    //         .then(res => res.json())
    //         .then(data => this.setState({movies: data.data}));
    // }

    render() {
        console.log('props: ');
        console.log(this.props);
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
    const query = new URLSearchParams(ownProps.location.search);
    return {
        movies: state.movies.items,
        loading: state.movies.isFetching,
        search: query.get('search')
    };
}

export default connect(mapStateToProps, {searchMovies})(SearchPage);