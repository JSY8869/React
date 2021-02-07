import DisplayNumber from '../Components/DisplayNumber';
import {connect} from 'react-redux'
function mapReduxStateToReactProps(state){
    return {
        number:state.number
    }
}
export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DisplayNumber);
