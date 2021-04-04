// import {firebaseConnect} from "../component/firebaseConnect";
import firebase from "firebase";
import {noteData} from "../component/firebaseConnect";
// var redux = require('redux');

const testInitialState = {
    // connect : firebase.database().ref('noteList/')
};

const testReducer = (state = testInitialState,action) => {
    switch (action.type) {
        case 'DELETE_NOTE':
            noteData.child(action.noteId).remove();
            return state;
        case 'ADD_DATA':
            noteData.push(action.note);
            return state;
        default:
            return state;
    }
}
export default testReducer;