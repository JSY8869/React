import React from 'react';
import { Route, Link } from 'react-router-dom';

const Rooms = ({ match }) => {
    return(
        <div>
            <h2>소현아 사랑해애애애애앵</h2>
            <Link to={'${match.url}/blueRoom'}>파란 방</Link>
            <br></br>
            <Link to={'${match.url}/greenRoom'}>초록 방</Link>
            <br></br>
            <Route path={'$(match.url)/:roomId'} component={Room}></Route>
            <Route exact path={match.url} render={() => <h3>방을 선택하세요</h3>}></Route>
        </div>
    );
};
export default Rooms;

function Room({ match }){
    return <h2>{'${match.params.roomId} 방을 선택하셨습니다.'}</h2>;
}