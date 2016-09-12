import React, { Component } from 'react';
import classnames from 'classnames';
import dateTimeFormat from '../utils/datetime';

export default class List extends Component {
    render() {
        const {isActive, setActiveItem, removeItem, list} = this.props;
        return (
            <div className="o-panel">
                <div className={classnames('c-card', 't-demo')}>
                {list.map(item =>
                    <div key={item.uid}
                        className={classnames(
                            'c-card__item u-window-box--medium',
                            {'c-card--is-active': isActive(item),
                            'c-card--is-new': !item.isViewed}
                        )}
                        onClick={() => setActiveItem(item)}>
                            <div className="c-text--loud t-demo">
                                {item.sender}
                            </div>
                            <i
                                onClick={(e) => {e.stopPropagation(); removeItem(item)}}
                                className="fa fa-times"
                                aria-hidden="true"></i>
                        <div className="u-letter-box--xsmall">
                            {item.subject}                            
                        </div>
                        <div className="c-text--quiet">
                            {dateTimeFormat(item.time_sent)}
                        </div>
                    </div>
                )}
                </div>
            </div>
        );
    }
}