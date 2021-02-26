// import logo from '../logo.svg';
import React, {Component} from "react";
import '../App.css';
import Header from './Header';
import Search from "./Search";
import DataTable from "./DataTable";
import AddUser from "./AddUser";
import DataUser from './DataUser.json';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hienthiform: false,
            data: DataUser,
            keySearch: ''
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
                            <Search submitSearch={(dl) => {this.submitSearch(dl)}} onOff={this.state.hienthiform} hienthiform={() => {this.clickForm()}}/>
                            <DataTable editUser={(id) => {this.editUser(id)}} data={arrSearch}/>
                            <AddUser hienthiform={this.state.hienthiform}/>
                        </div>
                    </div>
                {/*</div>*/}
            </div>
        );
    }
}

export default App;
