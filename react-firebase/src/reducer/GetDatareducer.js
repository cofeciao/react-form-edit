import {firebaseConnect} from "../component/firebaseConnect";
import firebase from "firebase";
const testInitialState = firebaseConnect;
const testReducer = (state = testInitialState,action) => {
    switch (action.type) {
        case 'GET_DATA':
            return firebase.database().ref('noteList/');
        case 'ADD_DATA':
            let data = firebase.database().ref('noteList/');
            return data.push(action.getData);
        default:
            return state;
    }
}
export default testReducer;