import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container text-center">
                        <h1 className="display-6">Quản Lý Nhân Sự</h1>
                        <p className="lead"> với dữ liệu json</p>
                            <hr className="my-2"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;