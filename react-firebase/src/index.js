import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store1 from "./Store";
// import noteData from "./component/firebaseConnect"

ReactDOM.render(
    <Provider store={store1}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
