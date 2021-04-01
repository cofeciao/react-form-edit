// import {firebaseConnect} from "../component/firebaseConnect";
import firebase from "firebase";
var redux = require('redux');
const testInitialState = {
    test: []
};

const testReducer = (state = testInitialState,action) => {
    switch (action.type) {
        case 'GET_DATA':
            let fillData = firebase.database().ref('noteList/');
            return fillData.on('value',(snapshot) => {
                state.test = snapshot.val()
            })
        case 'ADD_DATA':
            let addData = firebase.database().ref('noteList/');
            return addData.push(action.getData);
        default:
            return state;
    }
}
export default testReducer;