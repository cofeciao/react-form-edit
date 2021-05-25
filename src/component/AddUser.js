import React, {Component} from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ten: ''
        }
    }


    isChangeAddUser = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }

    clearInput = (event) => {

    }

    add = (event) => {
        this.props.submitAddUser(this.state.ten,this.state.dienthoai,this.state.quyen);
        // event.preventDefault();
        // console.log(this.state.ten);
        // const ten = this.state.ten;
        // this.setState({
        //     ten : ''
        // })
    }


    toast = () => {

    }

    hienthiform = () => {
        if (this.props.hienthiform === true) {
            return (
                <div className="col-12">
                    <div className="card border-primary mb-3 mt-2">
                        <form action="POST">
                            <div className="card-header">Thêm mới user vào hệ thống</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input name="ten" onChange={(event)=>{this.isChangeAddUser(event)}} type="text" className="form-control" placeholder="Tên User"/>
                                </div>
                                <div className="form-group">
                                    <input name="dienthoai" onChange={(event)=>{this.isChangeAddUser(event)}} type="text" className="form-control" placeholder="Điện thoại"/>
                                </div>
                                <div className="form-group">
                                    <select name="quyen" onChange={(event)=>{this.isChangeAddUser(event)}} className="custom-select">
                                        <option value>Chọn Quyền mặc định</option>
                                        <option value="1">Admin</option>
                                        <option value="2">Moderator</option>
                                        <option value="3">Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <button type="reset"  onClick={(event) => {this.add(event)}} className="btn btn-block btn-primary">Thêm mới</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                    {this.hienthiform()}
            </div>
        );
    }
}

export default AddUser;