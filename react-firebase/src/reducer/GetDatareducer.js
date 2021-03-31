import {firebaseConnect} from "../component/firebaseConnect";
import firebase from "firebase";
const testInitialState = firebaseConnect;
const testReducer = (state = testInitialState,action) => {
    switch (action.type) {
        case 'GET_DATA':
            let fillData = firebase.database().ref('noteList/');
            return fillData.once().then((snapshot) => {
                return snapshot.val();
            })
        case 'ADD_DATA':
            let addData = firebase.database().ref('noteList/');
            return addData.push(action.getData);
        default:
            return state;
    }
}
export default testReducer;