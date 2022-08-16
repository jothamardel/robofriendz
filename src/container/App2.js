import { useState, useEffect } from 'react';
import SearchBox from '../components/searchBox/SearchBox';
import CardList from '../components/cardList/CardList';


function App() {
  const [searchInput, setSearchInput] = useState('');
  const [robots, setRobots] = useState([]);
  const [loading, setLoading] = useState(false);

  function updateSearchInput(event) {
    setSearchInput(event.target.value);
  }

  function filteredRobots(arr) {
    // do something to filter
    const newRobots = robots.filter(item => (
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    ));
    return newRobots;
  }

  useEffect(() => {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
      setRobots(json);
      setLoading(false);
    })
    .catch((err) => console.log(err))
  }, []);
  
  return (
    <div>
      <h1 style={{ textAlign: 'center'}}>Robofriends </h1>
      <SearchBox updateSearchInput={updateSearchInput}/>
      {loading && <h1 style={{ textAlign: 'center'}}>Loading...</h1>}
      {!robots.length && !loading && <h3 style={{ textAlign: 'center'}}>no result found</h3>}
      <CardList clients={filteredRobots(robots)}/>
    </div>
  )
}


export default App;