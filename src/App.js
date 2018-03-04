import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      // <BrowserRouter basename="/my-app">
      <BrowserRouter>
        <div className="App">
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
