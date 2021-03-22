import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {noteData} from './firebaseConnect';
import firebase from "firebase";

class ManageNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
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

    cardHeader = () =>
        this.state.data.map((item,key) => {
                return (
                    // <div className="card">
                    //     <div className="card-header">
                    //         <a className="card-link" data-toggle="collapse" href={"#nnote"+key}>
                    //             {item.category}
                    //         </a>
                    //     </div>
                    //     <div id={"nnote"+key} className="collapse show" data-parent="#noteList">
                    //         <div className="card-body">
                        <div id="noteListChild" key={key}>
                            <div className="card">
                                <div className="card-header">
                                    <div className="row">
                                        <div className="col">
                                            <a className="card-link" data-toggle="collapse" href={"#note"+key}>
                                                {item.title}
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
                                <div id={"note"+key} className="collapse show" data-parent="#noteListChild">
                                    <div className="card-body">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        </div>
                            // </div>
                        // </div>
                    // </div>
                )
        });

    removeNote = (event) => {
        this.state.data.filter((item) => {})
    }

    render() {

        return (
            <div className="col mt-3">
                <h2>Quản Lý Note</h2>
                <p><strong>Note:</strong> The <strong>data-parent</strong> attribute makes sure that all collapsible elements under the specified parent will be closed when one of the collapsible item is shown.</p>
                <div id="noteList">
                    {
                        this.cardHeader()
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        testConnect: state.getData
    }
}

const mapDispathToProps = (dispath,ownProps) => {
    return {
        useTestInStore: () => {
            dispath({type: 'GET_DATA'})
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(ManageNote);