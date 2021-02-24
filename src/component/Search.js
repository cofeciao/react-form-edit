import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div>
                <div className="col-12">
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