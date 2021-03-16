import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebaseConnect} from './firebaseConnect';
import firebase from "firebase";

class ManageNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentWillMount() {
        var data = firebase.database().ref('noteList/');
        data.on('value',(items) => {
            // console.log(items.val());
            this.setState({
                data : items.val()
            })
        })
    }

    render() {
        // console.log(this.state.data);

           var cardHeader = () => this.state.data.map((value,key) => {
                return (
                        <div className="card-header">
                            <a className="card-link" data-toggle="collapse" href="#note1">
                                {value.category}
                            </a>
                        </div>
                )
            });


        return (
                <div className="col mt-3">
                    <h2>Quản Lý Note</h2>
                    <p><strong>Note:</strong> The <strong>data-parent</strong> attribute makes sure that all collapsible elements under the specified parent will be closed when one of the collapsible item is shown.</p>
                    <div id="noteList">
                        <div className="card">
                            {cardHeader}
                            <div id="note1" className="collapse show" data-parent="#noteList">
                                <div className="card-body">
                                    <div id="noteListChild">
                                        <div className="card">
                                            <div className="card-header">
                                                <a className="card-link" data-toggle="collapse" href="#note2">
                                                    Ngày 9/3 2021
                                                </a>
                                            </div>
                                            <div id="note2" className="collapse show" data-parent="#noteListChild">
                                                <div className="card-body">
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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