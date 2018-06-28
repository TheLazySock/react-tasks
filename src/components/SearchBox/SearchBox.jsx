// @flow
import React from 'react';
import style from './style.scss';

type SearchBoxProps = {
    search?: string,
    searchBy: string,
    onSearch: Function,
    onSearchType: Function
}

class SearchBox extends React.Component<SearchBoxProps, {text?: string, searchBy?: string}> {
    constructor(props: SearchBoxProps) {
        super(props);
        this.state = {
            text: this.props.search,
            searchBy: this.props.searchBy,
        };
    }

    handleTextChange(e: Object) {
        this.setState({
            text: e.target.value,
        });
    }

    pressEnterKey(e: Object) {
        if (e.keyCode === 13 && e.shiftKey === false) {
            this.handleSearch();
        }
    }

    handleSearch() {
        const { text } = this.state;

        this.props.onSearch(text);
    }

    handleSearchTypeChanged(e: Object) {
        this.setState({
            searchBy: e.target.value,
        });

        this.handleSearchType(e.target.value);
    }

    handleSearchType(searchBy: string) {
        this.props.onSearchType(searchBy);
    }

    render() {
        const { text } = this.state;
        return (
            <div className={style['search-box']}>
                <h6>FIND YOUR MOVIE</h6>
                <input
                    className={style['search-input']}
                    value={text}
                    onChange={this.handleTextChange.bind(this)}
                    placeholder="Search..."
                    onKeyDown={this.pressEnterKey.bind(this)}
                />
                <div className={style['search-box-elements']}>
                    <div className={style['search-by-box']}>
                        <label>SEARCH BY</label>
                        <button
                            onClick={this.handleSearchTypeChanged.bind(this)}
                            value="title"
                            className={`
                                ${style['title-button ']} 
                                ${this.state.searchBy === 'title' ? style.active : ''}`
                            }
                        >
                            TITLE
                        </button>
                        <button
                            onClick={this.handleSearchTypeChanged.bind(this)}
                            value="genres"
                            className={`
                                ${style['genres-button ']} 
                                ${this.state.searchBy === 'genres' ? style.active : ''}`
                            }
                        >
                            GENRE
                        </button>
                    </div>
                    <button
                        className={`
                            ${style['search-button']} 
                            ${!text ? style.disabled : ''}`
                        }
                        onClick={this.handleSearch.bind(this)}
                        disabled={!text}
                    >
                        SEARCH
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchBox;
