import React, {Component} from 'react';
import {connect} from 'react-redux';
// import firebase from "firebase";

class EditNote extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    getTextForm = (event) => {
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        });
    }

    addNote = (event) => {
        event.preventDefault();
        // let data = firebase.database().ref('noteList/');
        let note = {};
        note.content = this.state.noteContent;
        note.title = this.state.noteTitle;
        this.props.addData(note);
    }

    render() {
        return (
                <form action="POST" className="mt-3">
                    <h3>Sửa nội dung Note</h3>
                    <div className="form-group mt-5">
                        <label className="h5" htmlFor="noteTitle">Title Note</label>
                        <input onChange={(event) => {this.getTextForm(event)}} type="text" className="form-control" name="noteTitle" aria-describedby="helpId" placeholder="điền tiêu đề vào đây" />
                        <br/>
                        <label className="h5" htmlFor="noteContent">Content Note</label>
                        <textarea onChange={(event) => {this.getTextForm(event)}} name="noteContent" id="contentNote" cols={29} rows={5} placeholder=" điền nội dung vào đây"/>
                        <button onClick={(event) => {this.addNote(event)}} type="submit" className="btn btn-primary btn-block mt-3">Gửi</button>
                    </div>
                </form>
        );
    }
}

const mapStatetoProps = (state,ownProps) => {
    return {
        num: state.test
    }
}

const mapDispathtoProps = (dispath,ownprops) => {
    return {
        addData: (note) => {
            dispath({type: 'ADD_DATA',note});
        }
    }
}

export default connect(mapStatetoProps,mapDispathtoProps)(EditNote);