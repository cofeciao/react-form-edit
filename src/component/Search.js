import React, {Component} from 'react';
import {connect} from 'react-redux';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempSearch: '',
            ten: '',
            dienthoai: '',
            quyen: ''
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



    getInfoUserEdited = (event) => {
        // event.preventDefault();
        const user = {};
        user.id = this.props.dataOneUser.id
        user.ten = this.state.ten === '' ? this.props.dataOneUser.ten : this.state.ten;
        user.dienthoai = this.state.dienthoai === '' ? this.props.dataOneUser.dienthoai : this.state.dienthoai;
        user.quyen = this.state.quyen === '' ? this.props.dataOneUser.quyen : this.state.quyen;
        this.props.getUserEdit(user);
        this.props.disableEditForm();
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
                                    <input onChange={(event) => {this.addInfoEdited(event)}} defaultValue={this.props.dataOneUser.dienthoai} name="dienthoai" type="text" className="form-control" placeholder="Điện thoại"/>
                                </div>
                                <div className="form-group">
                                    <select onChange={(event) => {this.addInfoEdited(event)}} defaultValue={this.props.dataOneUser.quyen} name="quyen" className="custom-select">
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
                                                <div onClick={(event) => {this.getInfoUserEdited(event)}} className="btn btn-block btn-primary">Lưu</div>
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

export default connect(mapStateToProps,mapDispathToProps)(Search);