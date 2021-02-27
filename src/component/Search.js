import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempSearch: ''
        }
    }

    disableEdit = (event) => {
        event.preventDefault();
        this.props.disableEditForm();
    }

    addInfoEdited = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] : value
        });
    }

    getInfoUserEdited = (user) => {
        this.props.getUserEdit(user);
        console.log(user);
    }

    textSearch = (event) => {
        this.setState({
            tempSearch: event.target.value
        });
        this.props.submitSearch(this.state.tempSearch);
    }

    template = () => {
        if (this.props.onOff === false)
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.hienthiform()} >Thêm mới</div>
        if (this.props.onOff === true)
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.hienthiform()}>Đóng</div>
    }

    editForm = () => {
        // console.log(this.props.dataOneUser);
        if (this.props.editStatus === true){
                return (
                    <div className="card border-primary mb-3 mt-2 secondary-outline">
                        <form action="POST">
                            <div className="card-header text-center">Cập nhật user vào hệ thống</div>
                            <div className="card-body text-primary">
                                <div className="form-group">
                                    <input onChange={(event) => {this.addInfoEdited(event)}} defaultValue={this.props.dataOneUser.ten} name="ten" type="text" className="form-control" placeholder="Tên User"/>
                                </div>
                                <div className="form-group">
                                    <input defaultValue={this.props.dataOneUser.dienthoai} name="dienthoai" type="text" className="form-control" placeholder="Điện thoại"/>
                                </div>
                                <div className="form-group">
                                    <select defaultValue={this.props.dataOneUser.quyen} name="quyen" className="custom-select">
                                        <option value>Chọn Quyền mặc định</option>
                                        <option value="1">Admin</option>
                                        <option value="2">Moderator</option>
                                        <option value="3">Normal</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <div className="col-12">
                                        <div className="row">
                                            <div className="col-6">
                                                <div onClick={() => {this.getInfoUserEdited(this.state.ten)}} className="btn btn-block btn-primary">Lưu</div>
                                            </div>
                                            <div className="col-6">
                                                <button onClick={(event) => this.disableEdit(event)} className="btn btn-block btn-secondary">Đóng</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                )
        }
    }

    render() {
        return (
                <div className="col-12">
                    {this.editForm()}
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <div className="btn-group">
                                    <input onChange={(event) => {this.textSearch(event)}} type="text" className="form-control"/>
                                    <div onClick={() => {this.props.submitSearch(this.state.tempSearch)}} className="btn btn-info">Tìm</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3"></div>
                        <div className="col-3">
                            {this.template()}
                        </div>
                    </div>
                </div>
        );
    }
}

export default Search;