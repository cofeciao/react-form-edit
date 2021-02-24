import React, {Component} from 'react';

class DataTable extends Component {
    render() {
        return (
            <div className="col-9">
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
                            <div className="btn btn-warning sua"><i className="fa fa-edit" /> Sua</div>
                            <div className="btn btn-warning xoa"><i className="fa fa-delete" /> Xoa</div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </div>
        );
    }
}

export default DataTable;