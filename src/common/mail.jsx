import React, { Component } from 'react';
import List from './list.jsx';
import Item from './item.jsx';
import data from '../../data.json';

const initialState = {
    list: [],
    item: {}
}

export default class Mail extends Component {

    constructor() {
        super();

        this.state = initialState;

        this._isActive = this._isActive.bind(this);
        this._removeItem = this._removeItem.bind(this);
        this._setActiveItem = this._setActiveItem.bind(this);
    }

    componentWillMount() {
        this.setState({list: data.messages})
    }

    _updateStateItem(item, obj) {
        return this.state.list.map(i =>
            i.uid === item.uid ? Object.assign({}, item, obj) : i
        )
    }

    _setActiveItem(item) {
        this.setState({
            item: item,
            list: this._updateStateItem(item, {isViewed: true})
        });
    }

    _removeItem(item) {
        this.setState({
            item: item.uid === this.state.item.uid ? initialState.item : this.state.item,
            list: this.state.list.filter(i => i.uid !== item.uid)
        });
    }

    _isActive(item) {
        return this.state.item.uid === item.uid;
    }

    render() {
        const {list, item} = this.state;
        return (
            <main className="o-grid o-grid--no--gutter o-panel">
                <div className="o-grid__cell--width-40 o-panel-container">
                    <List
                        list={list}
                        isActive={this._isActive}
                        removeItem={this._removeItem}
                        setActiveItem={this._setActiveItem}/>
                </div>
                <div className="o-grid__cell--width-60 o-panel-container">
                    <Item item={item}/>
                </div>
            </main>
        );
    }
}
