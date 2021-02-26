import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tempSearch: ''
        }
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

    render() {
        // console.log(this.state.tempSearch);
        return (
                <div className="col-12">
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