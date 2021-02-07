# React Redux
## Redux 사용하기
rcc + tab 컴포넌트 생성
- container 컴포넌트 -> 실질적인 redux 코드
- presentation 컴포넌트 -> 동작을 구현한 코드

## React Redux 사용하기
- 설치 : `npm install react-redux`
### connect
- connect함수의 첫번째 인수 -> mapStateToProps
- connect함수의 두번째 인수 -> mapDispatchToProps
store의 state값이 변경될 때 마다 실행됨
```js
import {connect} from 'react-redux'
export default connect()(DisplayNumber);
```
### mapStateToProps
- Redux의 store의 state를 react에 props로 전달하는 함수 
```js
// state
function mapReduxStateToReactProps(state){
    return {
        number:state.number
    }
}
```
### mapDispatchToProps
- redux의 dispatch를 react의 component에 props로 연결시켜주는 함수
```js
// dispatch
function mapDispatchToProps(dispatch){
    return {
        onClick:function(size){
            dispatch({type:'INCREMENT', size:size})
        }
    }
}
export default connect(null, mapDispatchToProps)(AddNumber);
```
### Provider
Provider 하위의 모든 컴포넌트는 store에 접근 가능
```js
import {Provider} from 'react-redux';
import store from './store';

  <Provider store={store}>
    <App />
  </Provider>
```