import './App.css';
import React from 'react';
import Form from 'react-bootstrap/Form';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Weekend Demo App</h1>
        <Form>
          <Form.Label>Search for a City</Form.Label>
          <Form.Control type="city" placeholder="Enter city" />
        </Form>
      </div>
    );
  }
} 
