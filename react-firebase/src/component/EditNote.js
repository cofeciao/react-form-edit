import React, {Component} from 'react';

class EditNote extends Component {
    render() {
        return (
                <form action="POST" className="mt-3">
                    <h3>Sửa nội dung Note</h3>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Title Note</label>
                        <input type="text" className="form-control" name="noteTitle" id aria-describedby="helpId" placeholder />
                        <label htmlFor="noteContent">Content Note</label>
                        <textarea name="noteContent" id="contentNote" cols={35} rows={5} defaultValue={""} />
                        <small id="helpId" className="form-text text-muted">điền nội dung vào đây</small>
                        <button type="submit" className="btn btn-primary btn-block">Gửi</button>
                    </div>
                </form>
        );
    }
}

export default EditNote;