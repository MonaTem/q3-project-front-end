import React, { Component } from 'react';
// eslint-disable-next-line
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css';
import Cards from './components/Cards';
// eslint-disable-next-line
import Card from './components/Card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        clickedCardId: null
    };
  }  
  render () {
    return (
      <div>
        {this.state.clickedCardId === null ?
          <Cards /> : <Card id={this.state.clickedCardId} />}
      </div>
    );
  }
}

export default App;
