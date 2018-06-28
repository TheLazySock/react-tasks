// @flow
import React from 'react';

import style from './style.scss';

type MovieGridSummaryProps = {
    movieCount: number,
    sortOption: string,
    onSort: Function
}

class MovieGridSummary extends React.PureComponent<MovieGridSummaryProps> {
    changeSortOption(e: Object) {
        this.props.onSort(e.target.value);
    }

    render() {
        const { movieCount, sortOption } = this.props;
        return (
            <div className={style['sort-by-lane']}>
                {
                    movieCount !== 0
                        ? <React.Fragment>
                            <label>{movieCount} movies found</label>
                            <div>
                                Sort by
                                <button
                                    id="release-date"
                                    className={`
                                        ${style['sort-option']} 
                                        ${sortOption === 'release_date' ? style.active : ''}`
                                    }
                                    onClick={this.changeSortOption.bind(this)}
                                    value={'release_date'}
                                >
                                    release date
                                </button>
                                <button
                                    id="vote-average"
                                    className={`
                                        ${style['sort-option']} 
                                        ${sortOption === 'vote_average' ? style.active : ''}`
                                    }
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

export default MovieGridSummary;
