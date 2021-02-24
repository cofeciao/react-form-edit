// import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import Search from "./Search";
import DataTable from "./DataTable";

function App() {
  return (
    <div className="App">
      <Header></Header>
        <div className="searchForm">
            <div className="container">
                <div className="row">
                    <Search></Search>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
