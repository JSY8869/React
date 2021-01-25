# React
## 1장 수업소개
### component
1. 가독성
2. 재사용성
3. 유지보수
## 2장 공부 전략
## 3장 개발환경의 종류
### [codesandbox](https://codesandbox.io/s/new)
웹 사이트에서 코딩과 테스트 모두 가능
### create react app
Toolchain임
### npm이란?
node.js를 이용하여 만든 app들을 쉽게 설치할 수 있게 해주는 소프트웨어
## 4장 npm을 이용해서 create react app 설치
```
npm install -g create-react-app

권한 오류 발생 시
sudo npm install -g create-react-app
```
- npm은 프로그램을 설치하는 프로그램
- npx는 create-react-app을 한 번만 사용하는 경우(일회용)
- npx의 경우 create-react-app 명령어를 매번 사용해야 함
## 5장 create react app을 이용해서 개발환경구축
1. 폴더 생성 (**폴더명 react로 하면 안됌, 대문자 사용 불가**)
2. cmd 창에서 폴더 위치로 이동
3. create-react-app .
## 6장 샘플 웹앱 실행
```
npm run start
```
ctr+c로 종료
## 7장 JS 코딩하는 법
- ublic폴더 내의 index.html 에서 id=root인 div안에 모든 react의 component가 들어가야 함
- src폴더 내의 파일들을 수정하며 움직임
```js
import App from './App';
```
- 위의 코드에서 ./App 은 src 폴더 내의 App.js 파일을 말함
- App.js 파일을 수정하여 JS 코딩이 가능
## 8장 CSS 코딩하는 법
- App.js 에서 import './App.css';를 통해 css파일을 사용
- index.js 에서 import './index.css';를 통해 css파일을 사용
## 9장 배포하는 법
- build할 때 npm run build
- 실제 배포할 때는 build 폴더 내의 파일들을 배포
- npx serve -s build 명령어로 서버 생성
- npm serve -s build 도 가능
## 10장 리액트가 없다면
- ```<header>, <nav>, <article>``` 태그 알아두기
- [pure.html-react가 없는 형태](pure.html)
## 11장 컴포넌트 만들기
컴포넌트를 만드는 코드
```
class App extends Component {
  render(){
    return (
    );
  }
}
```
- 컴포넌트는 반드시 최상위 태그만 사용해야 함
- **JSX 코드로 코딩하면 create-react-app이 알아서 JavaScript코드로 변환해줌**
## 12장 props
```jsx
class Subject extends Component {
  render() {
    return (
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

class App extends Component { // 컴포넌트를 만드는 코드
  render(){
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        Hello, React!!
        <TOC></TOC>
        <Content></Content>
      </div>
    );
  }
}
```
## 13장 [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi/related?hl=ko)

## 14장 Component 파일로 분리하기
- ```export default TOC;``` TOC라는 클래스를 다른 곳에서 사용할 수 있게 함
- import로 불러오고 from 으로 경로 지정
## 15장 state
- probs의 값에 따라서 내부의 구현에 필요한 데이터
```js
  constructor(probs){
    super(probs);
    this.state = {
      subject:{title:'WEB', sub:'World wid Web'}
    }
  }
```
### key
- 반복문 사용해서 태그 생성 시 key로 이름을 각각 지어줘야 함
```js
while(i < data.length){
            lists.push(<li key={data[i].id}><a href ={"/content" + data[i].id}>{data[i].title}</a></li>)
            i = i+1;
        }
```
## 16장 이벤트 state props 그리고 render 함수
- state의 값이 바뀌면 state의 값을 가진 컴포넌트의 모든 render 함수가 다시 호출됨
- debugger -> 실행 중단시킴
- preventDefault() -> 태그의 동작을 막음
- onclick -> onClick으로 사용
- onClick={function(e){}} -> e는 **이벤트**
- **bind, setState**
- onClick={function(e){}.bind(this)} -> this를 함수에서의 컴포넌트로 사용
- this.setState({ mode: 'read' }); -> this.state.mode를 react에서 변경하는 방법
## 17장 컴포넌트 이벤트 만들기
```js
// 메인 컴포넌트
        <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mod: 'read'});
          }.bind(this)}
        >
        </Subject>
```
```js
// subject 컴포넌트
          <h1><a href="/" onClick={function(e){
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
```
```js
// 반복문을 통해 id값에 따라 제목과 내용이 바뀌게 함 (APP.js)
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
```
```js
// id값을 받아와 selcted_content_id에 숫자값으로 넣어줌 (APP.js)
          onChangePage={function(id){
            this.setState({
              mod: 'read',
              selected_content_id:Number(id)
            });
          }.bind(this)} 
```
```js
// data[i].id값을 id변수로 받아 onChangePage 함수에 인자로 넣어줌 (TOC.js)
                    onClick={function(id,e){
                        e.preventDefault();
                        this.props.onChangePage(id);
                    }.bind(this, data[i].id)}
```
## 18장 베이스 캠프
- props는 컴포넌트 내부에서 변경 불가
- state는 setState로 변경 가능
- 하위 컴포넌트에서 상위 컴포넌트의 값을 바꿀 때는 event 이용
- 상위 컴포넌트에서 하위 컴포넌트의 값을 바꿀 때는 props 이용
1. props는 스마트폰의 볼륨버튼이라면 사용자가 볼륨버튼을 누르면 state는 스마트폰안에서 스스로의 상태인 볼륨이 바뀌게 해놓은 모든 조치(회로,프로그래밍 등등)라고 할 수 있습니다. 
2. 상위 컴포넌트는 하위 컴포넌트에게 props를 통해 값을 전달해 내부의 state를 바꾸기 때문에 컴포넌트 스스로 외부에서 전달되는 props를 변경하는 것은 금지되어 있습니다.  또한 하위 컴포넌트가 상위 컴포넌트를 동작시키려면 props를 전달하는 것이 아니라 상위 컴포넌트 안에 이벤트를 심고 그 안에 setState로 값을 바꿔야 합니다.
## 19장 create 구현
- concat은 원본을 바꾸지 않는다.(배열 값 추가)
```js 
// props 값이 바뀌면 실행 아니면 중단 -> 랜더링 낭비 방지
    shouldComponentUpdate(newProps, newState){
        if(this.props.data === newProps.data){
            return false;
        }
        return true;
    }
```
- [App.js](src/APP.js)
- [CreateContents.js](src/components/CreateContents.js)
## 20장 update 구현
- [UpdateContents.js](src/components/UpdateContents.js)
## 21장 delete 구현
- [App.js](src/APP.js)
