// @flow
import React from 'react';
import CSSModules from 'react-css-modules';

import style from './style.scss';

type MovieGridSummaryProps = {
    movieCount: number,
    sortOption: string,
    onSort: Function
} 

class MovieGridSummary extends React.PureComponent<MovieGridSummaryProps> {
    changeSortOption(e) {
        this.props.onSort(e.target.value);
    }

    render() {
        const { movieCount, sortOption } = this.props;
        return (
            <div styleName="sort-by-lane">
                {
                    movieCount !== 0
                        ? <React.Fragment>
                            <label>{movieCount} movies found</label>
                            <div>
                                Sort by
                                <button
                                    id="release-date"
                                    styleName={`sort-option ${sortOption === 'release_date' ? 'active' : ''}`}
                                    onClick={this.changeSortOption.bind(this)}
                                    value={'release_date'}
                                >
                                    release date
                                </button>
                                <button
                                    id="vote-average"
                                    styleName={`sort-option ${sortOption === 'vote_average' ? 'active' : ''}`}
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
        );
    }
}

export default CSSModules(MovieGridSummary, style, { allowMultiple: true });
