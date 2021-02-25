// import logo from '../logo.svg';
import React, {Component} from "react";
import '../App.css';
import Header from './Header';
import Search from "./Search";
import DataTable from "./DataTable";
import AddUser from "./AddUser";

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            hienthiform: false
        }
    }

    // addUser = () => {
    //     this.setState({
    //         hienthiform: !this.state.hienthiform
    //     })
    //     return this.state.hienthiform;
    // }

    click = () => {
        this.setState({
            hienthiform: !this.state.hienthiform
        })
    }

    render() {
        // console.log(this.state.hienthiform);
        return (
            <div>
                <Header></Header>
                <div className="searchForm">
                    <div className="container">
                        <div className="row">
                            <Search onOff={this.state.hienthiform} hienthiform={() => {this.click()}}></Search>
                            <DataTable></DataTable>
                            <AddUser hienthiform={this.state.hienthiform}></AddUser>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
