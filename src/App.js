import React, { Component } from 'react';
import './App.css';
import TOC from "./components/TOC";
import Content from "./components/contents";
import Subject from "./components/subject";

class App extends Component { // 컴포넌트를 만드는 코드
  constructor(probs){
    super(probs);
    this.state = {
      mod: 'welcome',
      subject:{title:'WEB', sub:'World wide Web'},
      welcome:{title:'WeB', descs:'world wide Web'},
      content:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render(){
    var _title, _desc = null;
    if (this.state.mod === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.descs;
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}>
        </Subject>
        Hello, React!!
        <TOC data={this.state.content}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
