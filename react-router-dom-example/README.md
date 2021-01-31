# React Router DOM
여러 개의 페이지로 구성된 어플리케이션에서 좋음
## 설치 방법
1. 터미널을 킨다.
2. Router 설치를 희망하는 React프로젝트의 디렉토리로 이동한다.
3. npm install react-router-dom --save 입력한다.
4. 설치한 React 프로젝트 디렉토리를 열어 package.json 파일에 "dependencies" 중 "react-router-dom" 이 있는지 확인해 본다.
## Route
**주소가 일치하는 컴포넌트를 실행시킴**
`http://localhost:3000/`의 `path="/"`
`http://localhost:3000/topics`의 `path="/"`, `"/topics"`
exact를 사용하여 정확한 주소만 걸리게 할 수 있음
```js
<Route exact path="/"><Home></Home></Route>
```
## switch
첫번째로 걸리는 컴포넌트만 실행시키고 나머지는 실행 x

## Link
페이지 링크를 리로드 없이 실행시켜줌
```js
<li><Link to="/">Home</Link></li>
```

## HashRouter
## NavLink
사용중인 링크의 클래스 이름을 active로 지정해줌(Css 사용 시 편함)
## useParams
topic_id 값을 가져옴
: 기호로 사용
```js
<Route path="/topics/:topic_id">

function Topic(){
  var params = useParams();
  var topic_id = params.topic_id;
  var selected_topic = {
    title:'Sorry',
    description:'Not found'
  }
  for(var i = 0; i < contents.length; i++){
    if(contents[i].id === Number(topic_id)){
      selected_topic = contents[i];
      break;
    }
  }
  return(
    <div>
      <h3>{selected_topic.title}</h3>
      {selected_topic.description}
    </div>
  )
}
```
