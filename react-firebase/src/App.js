import logo from './logo.svg';
import './App.css';
import firebase from "firebase";
import {firebaseConnect} from './firebaseConnect';

function App() {

    const deleteNote = (id) => {
        const data = firebase.database().ref('noteList');
        data.child(id).remove();
        console.log('da xoa: ' + id);
    }

    const addNote = () => {
        const data = firebase.database().ref('noteList');
        data.push({
            title: 'day la ham push',
            content: 'su dung ham push de sinh ra id ngau nhien'
        })

    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <br/>
      <button onClick={() => deleteNote('-MV1e-cnYhuNpQ3Jzw-Z')} className="btn btn-secondary" >Xóa</button>
      <button onClick={() => addNote()} className="btn btn-secondary" >Thêm</button>
    </div>
  );
}

export default App;
