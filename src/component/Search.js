import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // trangthainut : true
        }
    }

    // thaydoitrangthai = () => {
    //     this.props.hienthiform = !this.props.hienthiform
    // }

    template = () => {
        if (this.props.onOff === false)
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.hienthiform()} >Thêm mới</div>
        if (this.props.onOff === true)
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.hienthiform()}>Đóng</div>
    }

    render() {
        // console.log(this.props.onOff)
        return (
                <div className="col-12">
                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <div className="btn-group">
                                    <input type="text" className="form-control"/>
                                    <div className="btn btn-info">Tìm</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            {this.template()}
                        </div>
                    </div>
                </div>
        );
    }
}

export default Search;