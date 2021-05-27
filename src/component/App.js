// import logo from '../logo.svg';
import React, {Component} from "react";
import '../App.css';
import Header from './Header';
import Search from "./Search";
import DataTable from "./DataTable";
import AddUser from "./AddUser";
import DataUser from './DataUser.json';
import ToastMessage from "./ToastMessage";
import {connect} from 'react-redux'

class App extends Component{

    constructor(props) {
        super(props);
        this.state = {
            hienthiform: false,
            data: DataUser,
            keySearch: '',
            checkedStatusEditUser: false,
            userEdit: {}
        }
    }

    clickForm = () => {
        this.setState({
            hienthiform: !this.state.hienthiform
        })
    }

    submitSearch = (dl) => {
        this.setState({
            keySearch: dl
        });
    }

    editUser = (id) => {
        console.log(id);
        this.state.data.forEach((item) => {
            if (item.id === id){

            }
        })
    }

    submitAddUser = (ten,sdt,quyen) => {
        var item = {};
        // var dataLength = this.state.data.length;
        item.id = "";
        item.ten =  ten;
        item.dienthoai = sdt;
        item.quyen = quyen;
        var items = this.state.data;
        if(items.push(item)){

        }

        this.setState({
            data : items
        })
    }

    enableStatus = () => {
        this.setState({

        });
    }

    dataOneUser = (user) => {
        this.setState({
            userEdit: user,
            checkedStatusEditUser : true
        });
        // console.log(this.state.checkedStatusEditUser)
    }

    deleteUser = (user) => {
        var arrayTerm = this.state.data.filter(item => item !== user);
        this.setState({
            data: arrayTerm
        })
    }

    disableEditForm = () => {
        this.setState({
            checkedStatusEditUser : false
        });
    }

    getUserEdit = (user) => {
        this.state.data.forEach((value) => {
            if (value.id === user.id){
                value.id = user.id;
                value.ten = user.ten;
                value.dienthoai = user.dienthoai;
                value.quyen = user.quyen;
            }
        })
    }

    render() {
        var arrSearch = [];
        this.state.data.forEach((item) => {
            if (item.ten.indexOf(this.state.keySearch) !== -1){
               arrSearch.push(item);
            }
        })

        return (
            <div>
                <Header/>
                {/*<div className="searchForm">*/}
                    <div className="container">
                        <div className="row">
                            <Search getUserEdit={(user) => {this.getUserEdit(user)}} disableEditForm={this.disableEditForm} dataOneUser={this.state.userEdit} editStatus={this.state.checkedStatusEditUser} enableStatus={this.state.enableStatus} submitSearch={(dl) => {this.submitSearch(dl)}} onOff={this.state.hienthiform} hienthiform={() => {this.clickForm()}}/>
                            <DataTable deleteUser={(user) => {this.deleteUser(user)}} dataOneUser={(user) => {this.dataOneUser(user)}} editUser={(id) => {this.editUser(id)}} data={arrSearch}/>
                            <AddUser hienthiform={this.state.hienthiform} submitAddUser={(ten,sdt,quyen) => {this.submitAddUser(ten,sdt,quyen)}}/>
                            <ToastMessage/>
                        </div>
                    </div>
                {/*</div>*/}
            </div>
        );
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        dulieu: state.num
    }
}

const mapDispathToProps = (dispath,ownProps) => {
    return {
        useIsStatusInStore: () => {
            dispath({type:'CHANGE_EDIT_STATUS'})
        }
    }
}
export default connect(mapStateToProps,mapDispathToProps)(App);
