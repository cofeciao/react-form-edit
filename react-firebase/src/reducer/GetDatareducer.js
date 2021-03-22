import {firebaseConnect} from "../component/firebaseConnect";
import firebase from "firebase";
const testInitialState = firebaseConnect;
const testReducer = (state = testInitialState,action) => {
    switch (action) {
        case 'GET_DATA':
            return firebase.database().ref('noteList/');
        default:
            return state;
    }
}
export default testReducer;