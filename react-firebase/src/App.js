import './App.css';
// import firebase from "firebase";
// import {firebaseConnect} from './firebaseConnect';
import NaviBar from "./component/NaviBar";
import ManageNote from "./component/ManageNote";
import EditNote from "./component/EditNote";
import React from "react";

function App() {

    // const deleteNote = (id) => {
    //     const data = firebase.database().ref('noteList');
    //     data.child(id).remove();
    //     console.log('da xoa: ' + id);
    // }
    //
    // const addNote = () => {
    //     const data = firebase.database().ref('noteList');
    //     data.push({
    //         title: 'day la ham push',
    //         content: 'su dung ham push de sinh ra id ngau nhien'
    //     })
    // }

  return (
      <div>
          <NaviBar/>
          <div className="container">
              <div className="row">
                  <div className="col">
                      <ManageNote/>
                  </div>
                  <div className="col-4">
                      <EditNote/>
                  </div>
              </div>
          </div>
      </div>

  );
}

export default App;
