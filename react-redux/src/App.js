import './App.css';
import React, {Component} from 'react';
import CoAddNumber from "./Containers/CoAddNumber"
import CoDisplayNumber from "./Containers/CoDisplayNumber"


class App extends Component {
  state = {number:0}

  render(){
    return (
      <div className="App">
        <h1>Root</h1>
        <CoAddNumber></CoAddNumber>
        <CoDisplayNumber></CoDisplayNumber>
      </div>
    );
  }
}

export default App;
