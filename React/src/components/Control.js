import React, { Component } from 'react';

class Control extends Component {
  render() {
    return (
      <ul>
        <li><a href="/create" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMod('create');
        }.bind(this)}>create</a></li>
        <li><a href="/update" onClick={function(e){
          e.preventDefault();
          this.props.onChangeMod('update');
        }.bind(this)}>update</a></li>
        <li><input onClick={function(e){
          e.preventDefault();
          this.props.onChangeMod('delete');
        }.bind(this)} type="button" value="delete"></input></li>
      </ul>
      );
    }
  }

export default Control;