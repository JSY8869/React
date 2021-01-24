import React, { Component } from 'react';
import './App.css';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContents";
import Subject from "./components/subject";
import Control from "./components/Control";
import CreateContent from "./components/CreateContents";

class App extends Component { // 컴포넌트를 만드는 코드
  constructor(probs){
    super(probs);
    this.mix_content_id = 3;
    this.state = {
      mod: 'create',
      selected_content_id:2,
      subject:{title:'WEB', sub:'World wide Web'},
      welcome:{title:'WeB', descs:'world wide Web'},
      content:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    };
  }
  render(){
    var _title, _desc, _article = null;
    if (this.state.mod === 'welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.descs;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
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
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>;
    }
    else if(this.state.mod === 'create'){
      _article = <CreateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.max_content_id+1;
        var contents = this.state.content.concat(
          {id:this.max_content_id, title:_title, desc:_desc}
        );
        this.setState({
          content:contents
        });
      }.bind(this)}></CreateContent>
    }
    return (
      <div className="App">

        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mod: 'welcome'});
          }.bind(this)}
        ></Subject>

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

        <Control onChangeMod={function(_mod){
          this.setState({
            mod: _mod
          })
        }.bind(this)}></Control>
        {_article}
      </div>
    );
  }
}

export default App;
