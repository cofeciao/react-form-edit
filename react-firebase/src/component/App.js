import '../App.css';
import firebase from "firebase";
import {firebaseConnect} from './firebaseConnect';
import NaviBar from "./NaviBar";
import ManageNote from "./ManageNote";
import EditNote from "./EditNote";
import React from "react";

function App() {
  return (
      <div>
          {/*<NaviBar/>*/}
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
