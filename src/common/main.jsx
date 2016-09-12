import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Main extends Component {
    render() {
        return(
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}
