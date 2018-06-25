/* eslint no-shadow: ["error", { "allow": ["searchMovies"] }] */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SearchBox from '../components/SearchBox.jsx';

import { searchMovies, setSearchBy, setSearchQuery } from '../redux/actions';


export class SearchPage extends React.Component {
    componentWillMount() {
        const { search, searchMovies, location } = this.props;

        if (search) {
            searchMovies(search, this.props.searchBy);
            this.props.history.push({
                pathname: location.pathname,
                search: `search=${search}`,
            });
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
            search: `search=${search}`,
        });

        this.props.setSearchQuery(search);
    }

    handleSearchType(searchBy) {
        this.props.setSearchBy(searchBy);
    }

    render() {
        return (
            <div>
                <div className="backdrop">
                    <header className="backdrop-header">
                        <Link className="site-name" to={'/search'}>netflixroulette</Link>
                    </header>
                    <SearchBox
                        onSearch={this.handleSearch.bind(this)}
                        onSearchType={this.handleSearchType.bind(this)}
                        search={this.props.search}
                        searchBy={this.props.searchBy}
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const query = new URLSearchParams(ownProps.location.search);

    return {
        movies: state.movies.items,
        loading: state.movies.isFetching,
        searchBy: state.searchType.searchBy,
        search: query.get('search') || state.searchQuery.searchQuery,
    };
}

export default connect(mapStateToProps, { searchMovies, setSearchBy, setSearchQuery })(SearchPage);
