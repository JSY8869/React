import DisplayNumber from '../Components/DisplayNumber';
import store from '../store';
import React, { Component } from 'react'

export default class CoDisplayNumber extends Component {
    state = {number:store.getState().number}
    constructor(props) {
        super(props);
        store.subscribe(function(){
            this.setState({number:store.getState().number});
        }.bind(this));
    }
    render() {
        return (
            <DisplayNumber number={this.state.number}></DisplayNumber>
        )
    }
}
