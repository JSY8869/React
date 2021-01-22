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
      selected_content_id:2,
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
    else if(this.state.mod === 'read'){
      var i = 0;
      while (i < this.state.content.length){
        var data = this.state.content[i];
        if (this.state.selected_content_id === data.id){
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mod: 'welcome'});
          }.bind(this)}
        >
        </Subject>
        Hello, React!!
        <TOC 
          onChangePage={function(id){
            this.setState({
              mod: 'read',
              selected_content_id:Number(id)
            });
          }.bind(this)} 
          data={this.state.content}>
        </TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
