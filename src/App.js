import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      // <BrowserRouter basename="/my-app">
      <Router>
        <div className="App">
          <Cards />
        </div>
      </Router>
    );
  }
}

export default App;
