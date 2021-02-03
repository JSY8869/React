# Redux
## 구조
- store : 정보가 저장되는 곳
- state : 정보(직접 접근 불가)
- reducer : state를 입력으로 받아 action을 창조해서 새로운 state값을 return해주는 가공함수
- render : UI를 만들어 주는 코드(사용자가 짜야 함)
- action : 객체
- dispatch : reducer를 호출해서 state의 값을 바꿈(state와 action 전달), subscribe를 이용해서 render함수 호출
- subscribe : state의 값이 바뀔 때마다 render함수 실행시킴
- getState : state에 접근하는 함수
## 설치
`npm install --save redux`
## store 만들기
```js
function reducer(state, action){
                if(state === undefined){
                    return {color:'yellow'}
                }
            }
            var store = Redux.createStore(reducer);
```
## reducer와 action을 이용 state값 만들기
```js
    
    if(action.type === 'CHANGE_COLOR'){
        newState = Object.assign({}, state, {color:action.color});
    }
    return newState;

    style="background-color:${state.color}"
```
## state의 변화에 따라 UI 반영하기
```js
    store.subscribe(red);
    store.subscribe(green);
    store.subscribe(blue);
```
## Redux dev tools
- 시간여행이 가능해짐
- local 서버를 열어야 사용가능
`window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`를 추가해야 함
```js
Redux.createStore(
                reducer,
                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
            );
```