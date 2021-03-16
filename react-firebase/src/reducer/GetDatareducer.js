import {firebaseConnect} from "../component/firebaseConnect";

const testInitialState = firebaseConnect;
const testReducer = (state = testInitialState,action) => {
    switch (action) {
        case 'GET_DATA':
            return state;
        default:
            return state;
    }
}
export default testReducer;