import React from 'react';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.searchText
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
                <input className="search-input" value={text} onChange={this.handleTextChange.bind(this)} placeholder="Search..."/>
                <button className="search-button" onClick={this.handleSearch.bind(this)}>Search</button>
            </div>
        )
    };
}

export default SearchBox;