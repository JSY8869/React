import AddNumber from "../Components/AddNumber";
import store from '../store';
import React, { Component } from 'react'

export default class CoAddNumber extends Component {
    render() {
        return (
            <AddNumber onClick={function(size){
                store.dispatch({type:'INCREMENT', size:size});
            }.bind(this)}></AddNumber>
        )
    }
}
