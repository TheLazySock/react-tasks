import React from 'react';

import BackdropContainer from '../components/BackdropContainer.jsx'

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.searchText || ''
        };
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    handleSearch() {
        const { text } = this.state;

        this.props.onSearch(text);
    };

    render() {
        const { text } = this.state;

        return (
            <div id="search-box">
                <h6>FIND YOUR MOVIE</h6>
                <input className="search-input" value={text} onChange={this.handleTextChange.bind(this)} placeholder="Search..."/>
                <div className="search-box-elements">
                    <div className="search-by-box">
                        <label>SEARCH BY</label>
                        <button>TITLE</button>
                        <button>GENRE</button>
                    </div>
                    <button className="search-button" onClick={this.handleSearch.bind(this)}>SEARCH</button>
                </div>
            </div>
        )
    };
}

export default SearchBox;