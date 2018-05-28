import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import SearchBox from '../components/SearchBox';
import MovieGrid from '../components/MovieGrid';
import BackdropContainer from '../components/BackdropContainer';

import { searchMovies, setSearchBy } from '../redux/actions';


class SearchPage extends React.Component {
    componentWillMount() {
        const { search, searchMovies } = this.props;

        if (search) {
            searchMovies(search);
        }
    }

    componentWillReceiveProps(nextProps) {
        if ((nextProps.search !== this.props.search) || (nextProps.searchBy !== this.props.searchBy)) {
            this.props.searchMovies(nextProps.search, nextProps.searchBy);
        }
    }

    handleSearch(search) {
        const { history, location } = this.props;
       
        history.push({
            pathname: location.pathname,
            search: `search=${search}`
        });
    }

    handleSearchType(searchBy) {
        this.props.setSearchBy(searchBy);
    }

    render() {
        return (
            <div>
                <BackdropContainer>
                    <SearchBox onSearch={this.handleSearch.bind(this)} onSearchType={this.handleSearchType.bind(this)} search={this.props.search} searchBy={this.props.searchBy}/>
                </BackdropContainer>
                <MovieGrid movies={this.props.movies}/>
            </div>
        );
    };
}

function mapStateToProps(state, ownProps) {
    const query = new URLSearchParams(ownProps.location.search);

    return {
        movies: state.movies.items,
        loading: state.movies.isFetching,
        searchBy: state.searchType.searchBy,
        search: query.get('search')
    };
}

export default connect(mapStateToProps, {searchMovies, setSearchBy})(SearchPage);