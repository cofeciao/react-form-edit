import React, {Component} from 'react';
// import '../assets/toastMessage.scss';

class ToastMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    toast = () => {
            return (
                <div className="toast toast--success">
                    <div className="toast__icon">
                        <i className="fas fa-check-circle"/>
                    </div>
                    <div className="toast__body">
                        <div className="toast__title">
                            Thành công
                        </div>
                        <div className="toast__content">
                            Đã thêm một thành viên mới
                        </div>
                    </div>
                    <div className="toast__close">
                        <i className="fas fa-times-circle"/>
                    </div>
                </div>
            )
    }



    render() {
        return (
            <div id="toast">
                {
                    this.toast()
                }
            </div>
        );
    }
}

export default ToastMessage;