import SearchBox from './SearchBox';
import CardList from './CardList';
import users from './users.json';
import "./App.css";
import React from 'react';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    }
  }

  updateSearchInput = (event) => {
    console.log(event.target.value);
    this.setState({ searchInput: event.target.value })
  }



  render() {

    const filteredRobots = users.length > 0 && users.filter(item => (
      item.name + '!'
    ))

    console.log("Filtered Robots: ", filteredRobots);

    return (
      <div className="">
        <h1 style={{ textAlign: 'center' }}>Robofriends</h1>
        <SearchBox updateSearchInput={this.updateSearchInput}/>
        <CardList clients={users}/>
      </div>
    );
  }
}

export default App;
