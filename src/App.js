import './App.css';
import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchedCity: '',
    }
  }
  
  handleLocationSearch = event => {
    event.preventDefault();

    let input= event.target.elements.citySearch.value;
    
    console.log(input);
  }

  render() {
    return (
      <div>
        <h1>Weekend Demo App</h1>
        <form onSubmit={this.handleLocationSearch}>
          <label>Search for a City
            <input type="text" name="citySearch" placeholder="Enter city" />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
} 
