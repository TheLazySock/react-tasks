import React from 'react';

import BackdropContainer from '../components/BackdropContainer';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.search || '',
            searchBy: this.props.searchBy
        };
    }

    handleTextChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    pressEnterKey(e) {
        if(e.keyCode == 13 && e.shiftKey == false) 
            this.handleSearch();
    }

    handleSearch() {
        const { text } = this.state;

        this.props.onSearch(text);
    };

    handleSearchTypeChanged(e) {
        this.setState({
            searchBy: e.target.value
        })

        this.handleSearchType(e.target.value);
    }

    handleSearchType(searchBy) {
        this.props.onSearchType(searchBy);
    }

    render() {
        const { text } = this.state;

        return (
            <div id="search-box">
                <h6>FIND YOUR MOVIE</h6>
                <input className="search-input" value={text} onChange={this.handleTextChange.bind(this)} placeholder="Search..." onKeyDown={this.pressEnterKey.bind(this)}/>
                <div className="search-box-elements">
                    <div className="search-by-box">
                        <label>SEARCH BY</label>
                        <button onClick={this.handleSearchTypeChanged.bind(this)} value="title" className={this.state.searchBy === "title" ? 'active' : null}>TITLE</button>
                        <button onClick={this.handleSearchTypeChanged.bind(this)} value="genres" className={this.state.searchBy === "genres" ? 'active' : null}>GENRE</button>
                    </div>
                    <button className={"search-button " + (!text ? "disabled" : "")} onClick={this.handleSearch.bind(this)} disabled={!text}>SEARCH</button>
                </div>
            </div>
        )
    };
}

export default SearchBox;