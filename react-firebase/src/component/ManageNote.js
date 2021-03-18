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

    componentWillMount() {
        let data = firebase.database().ref('noteList/');
        var array = [];
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

    cardHeader = () => {
        this.state.data.forEach(item => {
        // console.log(item.category);
        return (
            <div className="card">
                <div className="card-header">
                    <a className="card-link" data-toggle="collapse" href="#note1">
                        {/*{item.category}*/}Music
                    </a>
                </div>
                <div id="note1" className="collapse show" data-parent="#noteList">
                    llll
                    {/*<div className="card-body">*/}
                    {/*    <div id="noteListChild">*/}
                    {/*        <div className="card">*/}
                    {/*            <div className="card-header">*/}
                    {/*                <a className="card-link" data-toggle="collapse" href="#note2">*/}
                    {/*                    Ngày 9/3 2021*/}
                    {/*                </a>*/}
                    {/*            </div>*/}
                    {/*            <div id="note2" className="collapse show" data-parent="#noteListChild">*/}
                    {/*                <div className="card-body">*/}
                    {/*                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor*/}
                    {/*                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis*/}
                    {/*                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        )
    });
    }
        // })

        //     cardHeader = () => {
        //     this.state.data.forEach((item,key) => {
        //         console.log(item.category);
        //         return (
        //             <div className="card" >
        //                 <div className="card-header">
        //                     <a className="card-link" data-toggle="collapse" href={'#note'+key}>
        //                         {item.category}
        //                     </a>
        //                 </div>
        //                 <div id={'note'+key} className="collapse show" data-parent="#noteList">
        //                     llll
        //                     {/*<div className="card-body">*/}
        //                     {/*    <div id="noteListChild">*/}
        //                     {/*        <div className="card">*/}
        //                     {/*            <div className="card-header">*/}
        //                     {/*                <a className="card-link" data-toggle="collapse" href="#note2">*/}
        //                     {/*                    Ngày 9/3 2021*/}
        //                     {/*                </a>*/}
        //                     {/*            </div>*/}
        //                     {/*            <div id="note2" className="collapse show" data-parent="#noteListChild">*/}
        //                     {/*                <div className="card-body">*/}
        //                     {/*                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.*/}
        //                     {/*                </div>*/}
        //                     {/*            </div>*/}
        //                     {/*        </div>*/}
        //                     {/*    </div>*/}
        //                     {/*</div>*/}
        //                 </div>
        //             </div>
        //         )
        //     })
        // }

    render() {
        // console.log(JSON.stringify(this.cardHeader))
        return (
            <div className="col mt-3">
                <h2>Quản Lý Note</h2>
                <p><strong>Note:</strong> The <strong>data-parent</strong> attribute makes sure that all collapsible elements under the specified parent will be closed when one of the collapsible item is shown.</p>
                <div id="noteList">
                    {this.cardHeader()}
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