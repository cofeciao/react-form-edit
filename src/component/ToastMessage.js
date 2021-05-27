import React, {Component} from 'react';
import '../assets/toastMessage.scss';

class ToastMessage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const toast = ({
                     title = '',
                     message = '',
                     type = '',
                     duration = 0,
                 }) => {
            let main = document.getElementById("toast");
            if (main){
                const icons = {
                    success: 'fas fa-check-circle',
                    error: '',
                    info: 'fas fa-info-circle',
                    warning: ''
                }
                const toast = document.createElement("div");
                toast.classList.add("toast" ,`toast--${type}`);
                toast.innerHTML = `<div class="toast__icon">
                                  <i class="${icons[type]}" />
                                </div>
                                <div class="toast__body">
                                  <div class="toast__title">
                                    ${title}
                                  </div>
                                  <div class="toast__content">
                                    ${message}
                                  </div>
                                </div>
                                <div class="toast__close">
                                  <i class="fas fa-times-circle" />
                                </div>`;
            }
        }

        const toasts = () => {
            toast({
                title: 'Success',
                message: 'This is message',
                type: 'success',
                duration: 3000
            });
        }

        return (
            <div id="toast">
            </div>
        );
    }
}

export default ToastMessage;