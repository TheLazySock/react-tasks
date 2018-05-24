import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';

import SearchBox from '../components/SearchBox';
import MovieGrid from '../components/MovieGrid';
import BackdropContainer from '../components/BackdropContainer';

import { searchMovies } from '../redux/actions';


class SearchPage extends React.Component {
    componentWillMount() {
        const { search, searchMovies } = this.props;

        if (search) {
            searchMovies(search);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.search !== this.props.search) {
            this.props.searchMovies(nextProps.search);
        }
    }

    handleSearch(search) {
        const { history, location } = this.props;
       
        history.push({
            pathname: location.pathname,
            search: `search=${search}`
        });
    }

    render() {
        return (
            <div>
                <BackdropContainer>
                    <SearchBox onSearch={this.handleSearch.bind(this)} search={this.props.search}/>
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
        search: query.get('search')
    };
}

export default connect(mapStateToProps, {searchMovies})(SearchPage);