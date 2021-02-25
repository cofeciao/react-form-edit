import React, {Component} from 'react';

class DataTable extends Component {
    render() {
        return (
            <div className="col-9">
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
                <tr>
                    <td>1</td>
                    <td>Tran Duc Luong</td>
                    <td>0988998822</td>
                    <td>Moderator</td>
                    <td>
                        <div className="btn-group">
                            <div className="btn btn-warning sua"><i className="fa fa-edit" /> Sửa</div>
                            <div className="btn btn-danger xoa"><i className="fa fa-delete" /> Xóa</div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Tran Duc Luong</td>
                    <td>0988998822</td>
                    <td>Moderator</td>
                    <td>
                        <div className="btn-group">
                            <div className="btn btn-warning sua"><i className="fa fa-edit" /> Sửa</div>
                            <div className="btn btn-danger xoa"><i className="fa fa-delete" /> Xóa</div>
                        </div>
                    </td>
                </tr>
                </tbody>
                </table>
            </div>
        );
    }
}

export default DataTable;