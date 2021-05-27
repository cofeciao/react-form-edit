import React, {Component} from 'react';

class DataTable extends Component {





    user = () => this.props.data.map((value,key) => {
        const quyen = {
            1: 'Admin',
            2: 'Moderator',
            3: 'Normal'
        };
        return (
            <tr key={key}>
                <td>{key+1}</td>
                <td>{value.ten}</td>
                <td>{value.dienthoai}</td>
                <td>{quyen[value.quyen]}</td>
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
        console.log(this.props.data);
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