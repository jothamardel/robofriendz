import SearchBox from './SearchBox';
import CardList from './CardList';
import users from './users.json';
import "./App.css";


function App() {

  return (
    <div className="">
      <h1 style={{ textAlign: 'center' }}>Robofriends</h1>
      <SearchBox />
      <CardList clients={users}/>
    </div>
  );
}

export default App;
