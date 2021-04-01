import React, {Component} from 'react';
import firebase from "firebase";

class NoteItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    cardHeader = () => {
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
                                            <div onClick={() => {this.removeNote(this.state.data)}} className="btn btn-danger">Xóa</div>
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
            )
        };


    render() {
        return (
            this.cardHeader()
        );
    }
}

export default NoteItem;