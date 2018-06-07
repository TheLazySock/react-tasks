import React from 'react';

class MovieGridSummary extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    
    changeSortOption(e) {
        this.props.onSort(e.target.value);
    }
    
    render() {
        const { movieCount, sortOption } = this.props;
        return (
            <div className="sort-by-lane">
                {
                    movieCount !== 0
                    ?
                    <React.Fragment>
                        <label>{movieCount} movies found</label>
                        <div>
                            Sort by
                            <button 
                                id="release-date"
                                className={"sort-option " + (sortOption === 'release_date' ? 'active' : '')}
                                onClick={this.changeSortOption.bind(this)}
                                value={'release_date'}
                            >
                                release date 
                            </button>
                            <button 
                                id="vote-average"
                                className={"sort-option " + (sortOption === 'vote_average' ? 'active' : '')}
                                onClick={this.changeSortOption.bind(this)}
                                value={'vote_average'} 
                            >
                                rating
                            </button>
                        </div>
                    </React.Fragment>
                    : null
                }
            </div>
        )
    }
}

export default MovieGridSummary