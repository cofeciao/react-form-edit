// import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import Search from "./Search";
import DataTable from "./DataTable";
import AddUser from "./AddUser";
function App() {
  return (
    <div>
      <Header></Header>
        <div className="searchForm">
            <div className="container">
                <div className="row">
                    <Search></Search>
                    <DataTable></DataTable>
                    <AddUser></AddUser>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
