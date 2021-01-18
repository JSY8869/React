import React, { Component } from 'react';
import './App.css';
import TOC from "./components/TOC";
import Content from "./components/contents";
import Subject from "./components/subject";

class App extends Component { // 컴포넌트를 만드는 코드
  constructor(probs){
    super(probs);
    this.state = {
      subject:{title:'WEB', sub:'World wid Web'},
      content:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render(){
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>
        Hello, React!!
        <TOC data={this.state.content}></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
      </div>
    );
  }
}

export default App;
