import React, {Component} from 'react';
import {connect} from 'react-redux';
class EditNote extends Component {
    render() {
        return (
                <form action="POST" className="mt-3">
                    <h3>Sửa nội dung Note</h3>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Title Note</label>
                        <input type="text" className="form-control" name="noteTitle" aria-describedby="helpId" />
                        <label htmlFor="noteContent">Content Note</label>
                        <textarea name="noteContent" id="contentNote" cols={35} rows={5} />
                        <small id="helpId" className="form-text text-muted">điền nội dung vào đây</small>
                        {/*<button type="submit" className="btn btn-primary btn-block">Gửi</button>*/}
                    </div>
                </form>
        );
    }
}

const mapStatetoProps = (state,ownProps) => {
    return {
        num: state.test
    }
}

const mapDispathtoProps = (dispath,ownprops) => {
    return {
        use: () => {
            dispath({type: 'TEST_CONNECT'});
        }
    }
}

export default connect(mapStatetoProps,mapDispathtoProps)(EditNote);