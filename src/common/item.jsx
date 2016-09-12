import React, { Component } from 'react';
import dateTimeFormat from '../utils/datetime';

export default class Item extends Component {
    render() {
        const {item} = this.props;
        return (
            <div className="o-panel u-window-box--super t-demo">
                <div className="u-letter-box--large">
                    <p className="c-paragraph">
                        {item.message}
                    </p>
                </div>
            </div>
        );
    }
}