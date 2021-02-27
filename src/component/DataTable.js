import React, {Component} from 'react';

class DataTable extends Component {
    constructor(props) {
        super(props);
    }
    user = () => this.props.data.map((value,key) => {
        return (
            <tr>
                <td>{key+1}</td>
                <td>{value.ten}</td>
                <td>{value.dienthoai}</td>
                <td>{value.quyen}</td>
                <td>
                    <div className="btn-group">
                        <div onClick={(user) => this.props.dataOneUser(value)} className="btn btn-warning sua"><i className="fa fa-edit" /> Sửa</div>
                        <div onClick={(user) => {this.props.deleteUser(value)}} className="btn btn-danger xoa"><i className="fa fa-delete" /> Xóa</div>
                    </div>
                </td>
            </tr>
        )
    })

    render() {
        return (
            <div className="col">
                <table className="table table-stripped table-hover">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Thao Tác</th>
                    </tr>
                </thead>
                <tbody>
                    {this.user()}
                </tbody>
                </table>
            </div>
        );
    }
}

export default DataTable;