import React, {Component} from 'react';
import {connect} from 'react-redux';
import {noteData} from './firebaseConnect';
import firebase from "firebase";
import NoteItem from "./noteItem";

class ManageNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // data: []
        }
    }

    removeNote = (event) => {
        this.state.data.filter((item) => {})
    }

    getData = () => {
        let fillData = firebase.database().ref('noteList/');
        console.log(fillData);
        return noteData.on('value',(snapshot) => {
            console.log(snapshot.val());
        })
    }

    render() {
        console.log(this.getData());
        return (
            <div>
                <NoteItem/>
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        fillData: state.test
    }
}

const mapDispathToProps = (dispath,ownProps) => {
    return {
        getDataInStore: () => {
            dispath({type: 'GET_DATA'})
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(ManageNote);