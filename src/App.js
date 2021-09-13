import './App.css';
import React from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const locationKey = process.env.REACT_APP_LOCATION_KEY;
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchedCity: '',
    }
  }
  
  handleLocationSearch = async event => {
    event.preventDefault();

    let input= event.target.elements.citySearch.value;

    this.setState({
      searchedCity: input,
    });

    const locationUrl = `https://us1.locationiq.com/v1/search.php`;

    const locationResponse = await axios.get(locationUrl, {
      params: {
        key: locationKey,
        q: input,
        format: 'json',
      }
    });

    console.log(locationResponse.data[0]);
  }

  render() {
    return (
      <div>
        <h1>Weekend Demo App</h1>
        <Form onSubmit={this.handleLocationSearch}>
          <label>Search for a City
            <input type="text" name="citySearch" placeholder="Enter city" />
          </label>
          <Button type="submit" value="submit">Search</Button>
        </Form>
      </div>
    );
  }
} 
