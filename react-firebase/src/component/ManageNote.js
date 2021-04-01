import React, {Component} from 'react';
import {connect} from 'react-redux';
import {noteData} from './firebaseConnect';
import firebase from "firebase";
import NoteItem from "./noteItem";

class ManageNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        let data = firebase.database().ref('noteList/');
        let array = [];
        data.on('value',(items) => {
            items.forEach(item => {
                const title = item.val().title;
                const category = item.val().category;
                const content = item.val().content;

                array.push({
                    title: title,
                    content: content,
                    category: category
                })
            })
            this.setState({
                data: array
            });
        })
    }

    removeNote = (event) => {
        // this.state.data.filter((item) => {})
    }

    render() {
        let getData = () => {
            return this.state.data.map((value,key) => {
                return (
                        <NoteItem key={key} i={key} title={value.title} content={value.content}/>
                )
            })
        }
        return (
                <div className="col mt-3">
                    <h2>Quản Lý Note</h2>
                    <p><strong>Note:</strong> The <strong>data-parent</strong> attribute makes sure that all collapsible elements under the specified parent will be closed when one of the collapsible item is shown.</p>
                    <div id="noteList">
                            {getData()}
                    </div>
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