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