// import {firebaseConnect} from "../component/firebaseConnect";
import firebase from "firebase";
import {noteData} from "../component/firebaseConnect";

var redux = require('redux');
const testInitialState = {
    connect : firebase.database().ref('noteList/')
};

const testReducer = (state = testInitialState,action) => {
    switch (action.type) {
        case 'GET_DATA':
            return firebase.database().ref('noteList/');
        case 'DELETE_NOTE':
            let deleted = state.connect.child(action.noteId).remove();
            return deleted;
        case 'ADD_DATA':
            let addData = firebase.database().ref('noteList/');
            return addData.push(action.getData);
        default:
            return state;
    }
}
export default testReducer;