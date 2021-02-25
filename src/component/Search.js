import React, {Component} from 'react';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    template = '<div >'

    render() {
        return (
                <div className="col-12">
                    <div className="col-6">
                        <div className="form-group">
                            <div className="btn-group">
                                <input type="text" className="form-control"/>
                                <div className="btn btn-info">Tìm</div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Search;