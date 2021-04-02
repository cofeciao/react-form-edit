import React, {Component} from 'react';
import firebase from "firebase";
import {connect} from "react-redux";

class NoteItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    removeNote = () => {
        // event.preventDefault();
       this.props.deleteNote(this.props.note.id);

    }

    render() {

        return (
            // <div className="card">
            //     <div className="card-header">
            //         <a className="card-link" data-toggle="collapse" href={"#nnote"+key}>
            //             {item.category}
            //         </a>
            //     </div>
            //     <div id={"nnote"+key} className="collapse show" data-parent="#noteList">
            //         <div className="card-body">
            <div id="noteListChild">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col">
                                <a className="card-link" data-toggle="collapse" href={"#note"+this.props.i}>
                                    {this.props.title}
                                </a>
                            </div>
                            <div className="col-3">
                                <form>
                                    <div className="row ml-5">
                                        <div className="btn btn-warning">Sửa</div>
                                        <div onClick={() => {this.removeNote()}} className="btn btn-danger">Xóa</div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div id={"note"+this.props.i} className="collapse show" data-parent="#noteListChild">
                        <div className="card-body">
                            {this.props.content}
                        </div>
                    </div>
                </div>
            </div>
            // </div>
            // </div>
            // </div>
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        // fillData: state.test
    }
}

const mapDispathToProps = (dispath,ownProps) => {
    return {
        deleteNote: (noteId) => {
            dispath({type: 'DELETE_NOTE',noteId})
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(NoteItem);
